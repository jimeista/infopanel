import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import moment from 'moment'

import { dtp_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'
import { Spinner } from '../Spinner'

const Crimes = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      let ob = {}
      await axios.post('/sc-public-safety/api/crimes', {}).then((res) => {
        districts.forEach((d) => {
          ob = {
            ...ob,
            [d]: res.data
              .filter((i) => i['government-agency'].includes(d))
              .sort((a, b) =>
                strcmp(b['initiation-date-pretty'], a['initiation-date-pretty'])
              ),
          }
        })
        setLoading(false)
      })

      let data_ = Object.keys(ob).map((key) => ({
        value: key,
        data: ob[key],
      }))
      data_ = filterForSevenDaysData(data_)
      setData(data_)
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
    <div className='InfoPanel_block crime'>
      <div className={`InfoPanel_Title_wrap`}>
        <span className='InfoPanel_Title'>Мониторинг преступности</span>
        <div className={`header_block_crime`}>
          <div>
            <span>Всего преступлений</span>
            <span>{`за период с ${
              data[0]
                ? data[0].data[data[0].data.length - 1][
                    'initiation-date-pretty'
                  ]
                : ''
            } по ${
              data[0] ? data[0].data[0]['initiation-date-pretty'] : ''
            }`}</span>
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
            dataSet={() => dtp_data(data)}
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

const filterForSevenDaysData = (data) => {
  return data.map((i) => ({
    value: districtsRename(i.value),
    data: i.data.splice(0, inSevenDaysRangeIndex(i.data)),
  }))
}

const inSevenDaysRangeIndex = (data) => {
  let index = 0
  let start_ = data[0]['initiation-date-pretty']
  start_ = [start_.split('.')[2], start_.split('.')[1], start_.split('.')[0]]

  for (let i = 1; i < data.length; i++) {
    let end_ = data[i]['initiation-date-pretty']
    end_ = [end_.split('.')[2], end_.split('.')[1], end_.split('.')[0]]

    if (moment(start_).diff(moment(end_), 'days') > 7) {
      index = i
      break
    }
  }

  return index
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

export const strcmp = (a, b) => {
  if (a === b) {
    return 0
  }

  if (a > b) {
    return 1
  }

  return -1
}
