import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { Spinner } from '../Spinner'

const Transport = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      await axios
        .get(
          `/sc-public-transport/api/regularity?start=${moment()
            .subtract(14, 'days')
            .format('YYYY-MM-DD')}&end=${moment().format('YYYY-MM-DD')}`
        )
        .then((res) => {
          console.log(res)
          setLoading(false)
          setData(res.data)
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
              <span>{getTotalCompanies(data)}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Транспортных едениц</span>
              <span>{data.length > 0 && getTotalBusCount(data)}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Общий % выхода</span>
              <span>{`${data.length > 0 && getTotalPercentage(data)}%`}</span>
            </div>
            <div className='PublicTransport_out_card'>
              <span>Выход в учетные часы</span>
              <span>{`${data.length > 0 && getTotalTimeExit(data)} %`}</span>
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

const getTotalBusCount = (data) => {
  let sum = 0

  data.forEach((i) => {
    sum += i.fact
  })

  return sum
}

const getTotalPercentage = (data) => {
  let ob = data.reduce((prev, i) => {
    return {
      plan: prev.plan + i.plan,
      fact: prev.fact + i.fact,
    }
  })

  return ((ob.fact / ob.plan) * 100).toFixed(2)
}

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
      let plan = i.plan.reduce((sum, num) => sum + num)
      let fact = i.fact.reduce((sum, num) => sum + num)

      return plan === 0 ? prev : (fact / plan) * 100
    }, 0) / Object.keys(timegroup).length
  ).toFixed(2)
}
