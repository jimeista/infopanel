import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { Spinner } from '../Spinner'
// import { transport_option } from '../ChartOption'
// import { InfoPanelChart } from '../InfoPanelChart'

const Transport = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [end, setEnd] = useState()
  const [start, setStart] = useState()

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      let start_ = ''
      let end_ = ''
      await axios.get(`/sc-public-transport/api/regularity`).then((res) => {
        end_ = findLatesData(res.data)
        start_ = moment(end_).subtract(7, 'days').format('YYYY-MM-DD')
      })

      await axios
        .get(`/sc-public-transport/api/regularity?start=${start_}&end=${end_}`)
        .then((res) => {
          setLoading(false)
          setStart(moment(start_).format('DD.MM.YYYY'))
          setEnd(moment(end_).format('DD.MM.YYYY'))
          setData(res.data)
        })
    }

    fetch()
  }, [])

  console.log(data)

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
      {/* <span className='InfoPanel_Title'>{`Данные за ${end}`}</span> */}
      {/* <div className='InfoPanel_block_info'>
        {!loading ? (
          <InfoPanelChart
            typeChart={'HorizontalBar'}
            option={transport_option}
            dataSet={transport_data(data)}
          />
        ) : (
          <Spinner />
        )}
      </div> */}
      <div className='PublicTransport_out_body chart_Bar block_three '>
        {!loading ? (
          <div className='PublicTransport_out_card_wrap'>
            <div className='PublicTransport_out_card date_block'>
              <span>Данные </span>
              <span>{`c ${start} по ${end}`}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Компаний</span>
              <span>4</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Транспортных едениц</span>
              <span>3006</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Общий % выхода</span>
              <span>95.25%</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Выход в учетные часы</span>
              <span>86.58 %</span>
            </div>
          </div>
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

const findLatesData = (data) => {
  let date = moment().format('YYYY-MM-DD')
  let diff

  data.forEach((i) => {
    let days = moment().diff(moment(i.date.slice(0, 10)), 'days')
    if (diff && days < diff) {
      diff = days
      date = i.date
    } else {
      diff = days
    }
  })

  return date.slice(0, 10)
}
