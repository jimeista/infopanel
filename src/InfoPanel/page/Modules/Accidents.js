import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

import { dtp_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'
import { Spinner } from '../Spinner'

const Accidents = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      let ob = {}
      await axios
        .post('/sc-public-safety/api/accidents', {
          start: '2020-10-16',
          end: '2020-10-23',
        })
        .then((res) => {
          districts.forEach((d) => {
            ob = {
              ...ob,
              [d]: res.data.filter((i) => i['region'].includes(d)),
            }
          })
          setLoading(false)
        })
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
    <div className='InfoPanel_block dtp' onClick={() => {
      window.open('https://sc.smartalmaty.kz/main/monitoring-road-accidents', '_blank')
    }}>
      <div className={`InfoPanel_Title_wrap`}>
        <span className='InfoPanel_Title'>Мониторинг ДТП</span>
        <div className={`header_block_crime`}>
          <div>
            <span>Всего нарушений</span>
            <span>за период с 16.10.2020 по 23.10.2020</span>
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
