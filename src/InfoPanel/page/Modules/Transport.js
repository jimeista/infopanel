import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import { transport_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'

const Transport = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      await axios.get('/sc-public-transport/api/regularity').then((res) => {
        setData(res.data)
        setLoading(false)
      })
    }

    fetch()
  }, [])

  return (
    <div className='InfoPanel_block transport'>
      <span className='InfoPanel_Title transportFlow'>
        Мониторинг выхода общественного транспорта по часам
      </span>
      <div className='InfoPanel_block_info'>
        {!loading ? (
          <InfoPanelChart
            typeChart={'HorizontalBar'}
            option={transport_option}
            dataSet={() => transport_data(data)}
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
