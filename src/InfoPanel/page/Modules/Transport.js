import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { Spinner } from '../Spinner'

const Transport = ({ config }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true) // состояние спиннера

  // инициализация данных
  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      // let url = '/sc-api-gateway/secured/_/sc-public-transport/api/regularity'

      await axios.get('/sc-public-transport/api/regularity').then((res) => {
        setLoading(false)
        setData(res.data)
      })
    }

    if (config) fetch()
  }, [config])

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
      {/* статистика */}
      <div className='PublicTransport_out_body chart_Bar block_three '>
        {!loading ? (
          <div className='PublicTransport_out_card_wrap'>
            <div className='PublicTransport_out_card date_block'>
              <span>Данные </span>
              <span>{`c ${moment()
                .subtract(14, 'days')
                .format('DD.MM.YYYY')} по ${moment().format(
                'DD.MM.YYYY'
              )}`}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Компаний</span>
              <span>{data.length > 0 ? getTotalCompanies(data) : ''}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Транспортных единиц</span>
              <span>{data.length > 0 ? getTotalBusCount(data) : ''}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Общий % выхода</span>
              <span>{`${
                data.length > 0 ? getTotalPercentage(data) : ''
              }%`}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Выход в учетные часы</span>
              <span>{`${
                data.length > 0 ? getTotalTimeExit(data) : ''
              } %`}</span>
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

// вспомогательная функция подсчета количества компании
const getTotalCompanies = (data) => {
  let ob = {}

  data.forEach((i) => {
    ob = {
      ...ob,
      [i.company]: i.company,
    }
  })

  return Object.values(ob).length
}

// вспомогательная функция подсчета количества транспортных ед
const getTotalBusCount = (data) => {
  let sum = 0

  data.forEach((i) => {
    sum += i.fact
  })

  return sum
}

// вспомогательная функция подсчета количества общего % выхода
const getTotalPercentage = (data) => {
  let ob = data.reduce((prev, i) => {
    return {
      plan: prev.plan + i.plan,
      fact: prev.fact + i.fact,
    }
  })

  return ((ob.fact / ob.plan) * 100).toFixed(2)
}

// вспомогательная функция подсчета количества выхода в учетные часы
const getTotalTimeExit = (data) => {
  let timegroup = {}
  data.forEach((i) => {
    timegroup = {
      ...timegroup,
      [i.time]: {
        plan: timegroup[`${i.time}`]
          ? [i.plan, ...timegroup[`${i.time}`].plan]
          : [i.plan],
        fact: timegroup[`${i.time}`]
          ? [i.fact, ...timegroup[`${i.time}`].fact]
          : [i.fact],
      },
    }
  })

  return (
    Object.values(timegroup).reduce((prev, i) => {
      let plan = i.plan.reduce((sum, num) => sum + num, 0)
      let fact = i.fact.reduce((sum, num) => sum + num, 0)

      return plan === 0 ? prev : prev + (fact / plan) * 100
    }, 0) / Object.keys(timegroup).length
  ).toFixed(2)
}
