import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import moment from 'moment'

import { dtp_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'
import { Spinner } from '../Spinner'

const Crimes = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  let start = moment().subtract(7, 'days').format('YYYY-MM-DD')
  let end = moment().subtract(1, 'days').format('YYYY-MM-DD')

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      let ob = {}
      await axios
        .post('/sc-public-safety/api/crimes', {
          start,
          end,
        })
        .then((res) => {
          districts.forEach((d) => {
            ob = {
              ...ob,
              [d]: res.data.filter((i) => i['government-agency'].includes(d)),
            }
          })
          setLoading(false)
        })

      let data_ = Object.keys(ob).map((key) => ({
        value: districtsRename(key),
        data: ob[key],
      }))

      setData(data_)
    }
    fetch()
  }, [start, end])

  const total_crimes_ = useMemo(() => {
    let count = 0
    data.forEach((i) => {
      count = count + i.data.length
    })

    return count
  }, [data])

  return (
    <div
      className='InfoPanel_block crime'
      onClick={() => {
        window.open(
          'https://sc.smartalmaty.kz/main/monitoring-crimes',
          '_blank'
        )
      }}
    >
      <div className={`InfoPanel_Title_wrap`}>
        <span className='InfoPanel_Title'>Мониторинг преступности</span>
        <div className={`header_block_crime`}>
          <div>
            <span>Всего преступлений</span>
            <span>{`за период с ${start.split('-')[2]}.${
              start.split('-')[1]
            }.${start.split('-')[0].slice(2, 4)} по ${end.split('-')[2]}.${
              end.split('-')[1]
            }.${end.split('-')[0].slice(2, 4)}`}</span>
          </div>
          <span>{total_crimes_}</span>
        </div>
      </div>

      <div className='InfoPanel_block_info'>
        {loading ? (
          <Spinner />
        ) : (
          <InfoPanelChart
            typeChart={'HorizontalBar'}
            option={dtp_option}
            dataSet={dtp_data(data)}
          />
        )}
      </div>
    </div>
  )
}

export default Crimes

const districts = [
  'Алмалинского',
  'Алатауского',
  'Ауэзовского',
  'Бостандыкского',
  'Жетысуского',
  'Медеуского',
  'Наурызбайского',
  'Турксибского',
]

/*Преступления и дтп*/
export const dtp_data = (data) => {
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

const districtsRename = (name) => {
  switch (name) {
    case 'Алмалинского':
      return 'Алмалинский'
    case 'Алатауского':
      return 'Алатауский'
    case 'Ауэзовского':
      return 'Ауэзовский'
    case 'Бостандыкского':
      return 'Бостандыкский'
    case 'Жетысуского':
      return 'Жетысуский'
    case 'Медеуского':
      return 'Медеуский'
    case 'Наурызбайского':
      return 'Наурызбаевский'
    case 'Турксибского':
      return 'Турксибский'
    default:
      return name
  }
}
