import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { Spinner } from '../Spinner'
import { transport_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'

const Transport = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [end, setEnd] = useState()

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      let date_ = moment().format('YYYY-MM-DD')
      await axios
        .get(`/sc-public-transport/api/regularity?start=${date_}&end=${date_}`)
        .then((res) => {
          if (res.data.length > 0) {
            setEnd(date_)
            setLoading(false)
            setData(res.data)
          } else {
            date_ = moment().subtract(1, 'days').format('YYYY-MM-DD')
            axios
              .get(
                `/sc-public-transport/api/regularity?start=${date_}&end=${date_}`
              )
              .then((res_) => {
                setEnd(date_)
                setLoading(false)
                setData(res_.data)
              })
          }
        })
    }

    fetch()
  }, [])

  return (
    <div
      className='InfoPanel_block transport'
      onClick={() => {
        window.open('https://sc.smartalmaty.kz/main/monitoring-out', '_blank')
      }}
    >
      <span className='InfoPanel_Title transportFlow'>
        Мониторинг выхода общественного транспорта по часам
      </span>
      <span className='InfoPanel_Title'>{`Данные за ${end}`}</span>
      <div className='InfoPanel_block_info'>
        {!loading ? (
          <InfoPanelChart
            typeChart={'HorizontalBar'}
            option={transport_option}
            dataSet={transport_data(data)}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default React.memo(Transport)

/*выход транспорта*/
export const transport_data = (data) => {
  let time = {}

  data.forEach((i) => {
    if (time[i.time]) {
      time = {
        ...time,
        [i.time]: {
          plan: i.plan + time[i.time].plan,
          fact: i.fact + time[i.time].fact,
        },
      }
    } else {
      time = { ...time, [i.time]: { plan: i.plan, fact: i.fact } }
    }
  })

  return {
    labels: Object.keys(time),
    datasets: [
      {
        label: 'План ',
        backgroundColor: '#7ed321',
        data: Object.values(time).map((i) => i.plan),
        /*fontSize: '22'*/
      },
      {
        label: 'Факт',
        backgroundColor: '#4cbea9',
        data: Object.values(time).map((i) => i.fact),
        /*fontSize: '22'*/
      },
    ],
  }
}
