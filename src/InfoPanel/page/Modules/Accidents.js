import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import { dtp_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'
import { Spinner } from '../Spinner'

const moment = extendMoment(Moment)
let format = 'YYYY-MM-DD'

const Accidents = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      let ob = {}
      let arr = []

      await axios
        .post('/sc-public-safety/api/accidents', {
          start: '2020-06-01',
        })
        .then((res) => {
          let initialData = res.data[0]

          arr = res.data.filter((i) => isInRange(initialData, i['date']))

          districts.forEach((d) => {
            ob = {
              ...ob,
              [d]: arr.filter((i, index) => {
                if (i['region'].includes(d)) {
                  return i
                }
              }),
            }
          })
          setLoading(false)
        })

      setStart(
        moment.unix(arr[arr.length - 1]['date'] / 1000).format('DD.MM.YYYY')
      )
      setEnd(moment.unix(arr[0]['date'] / 1000).format('DD.MM.YYYY'))
      setData(
        Object.keys(ob).map((key) => ({
          value: key,
          data: ob[key],
        }))
      )
    }
    fetch()
  }, [])

  const total_crimes_ = useMemo(() => {
    let count = 0
    data.forEach((i) => {
      count = count + i.data.length
    })

    return count
  }, [data])

  return (
    <div
      className='InfoPanel_block dtp'
      onClick={() => {
        window.open(
          'https://sc.smartalmaty.kz/main/monitoring-road-accidents',
          '_blank'
        )
      }}
    >
      <div className={`InfoPanel_Title_wrap`}>
        <span className='InfoPanel_Title'>Мониторинг ДТП</span>
        <div className={`header_block_crime`}>
          <div>
            <span>Всего нарушений</span>
            <span>{`за период с ${start} по ${end}`}</span>
          </div>
          <span>{total_crimes_}</span>
        </div>
      </div>
      <div className='InfoPanel_block_info'>
        {!loading ? (
          <InfoPanelChart
            typeChart={'HorizontalBar'}
            option={dtp_option}
            dataSet={() => dtp_data(data)}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default Accidents

const districts = [
  'Алмалинский',
  'Алатауский',
  'Ауэзовский',
  'Бостандыкский',
  'Жетысуский',
  'Медеуский',
  'Наурызбайский',
  'Турксибский',
]

/*Преступления и дтп*/
const dtp_data = (data) => {
  return {
    labels: data.map((i) => i.value),
    datasets: [
      {
        label: 'проектная мощность',
        backgroundColor: '#4c90af',
        stack: 'Stack 0',
        data: data.map((i) => i.data.length),
      },
    ],
  }
}

const isInRange = (initialData, date_) => {
  let date = initialData['date']
  let end_ = moment.unix(date / 1000).format(format)
  let start_ = moment(end_, format).subtract(7, 'days').format(format)

  end_ = moment(end_, format).add(1, 'days').format(format)
  const range = moment().range(start_, end_)

  const isRange = range.contains(date_)

  // date_ = moment.unix(date_ / 1000).format(format)
  // console.log(date_, start_, end_, isRange)

  return isRange
}
