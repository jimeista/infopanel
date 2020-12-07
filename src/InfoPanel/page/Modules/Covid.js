import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import { CovidOptions } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'

const start = '26.11.2020'
const end = '03.12.2020'

const Covid = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get('https://covid19.smartalmaty.kz/api/snapshots/dailypatients')
      .then((res) => console.log(res))

    const fetch = async () => {
      await axios
        .get(
          `https://covid19.smartalmaty.kz/api/snapshots/dailypatients?start=${start}&end=${end}`
        )
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
    }

    fetch()
  }, [])

  return (
    <div
      className='InfoPanel_block covid'
      onClick={() => {
        window.open('https://sc.smartalmaty.kz/main/covid-19', '_blank')
      }}
    >
      <div className={`header_block`}>
        <div className={`InfoPanel_Title_wrap`}>
          <span className='InfoPanel_Title'>Динамика Covid-19</span>
          <span className='InfoPanel_Title'>
            {`за период с ${start} по ${end}`}
          </span>
        </div>
        <div className={`card_header_wrap`}>
          <div className='card_header'>
            <span>Всего симптомных</span>
            <span>{countTotal(data, 'infected')}</span>
          </div>
          <div className='card_header'>
            <span>Всего бессимптомных</span>
            <span>{countTotal(data, 'asymptomatic')}</span>
          </div>
          <div className='card_header'>
            <span>Всего вылечившихся</span>
            <span>{countTotal(data, 'cured')}</span>
          </div>
          <div className='card_header'>
            <span>Всего летальных</span>
            <span>{countTotal(data, 'dead')}</span>
          </div>
        </div>
      </div>
      <div className='InfoPanel_block_info'>
        {!loading ? (
          <InfoPanelChart
            typeChart={'Line'}
            option={CovidOptions}
            dataSet={CovidData(data)}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default React.memo(Covid)

const countTotal = (data, key) => {
  let count = 0

  data.forEach((i) => {
    count = count + i.snapshot[key]
  })

  return count
}

let array_dates = [
  '10.11.2020',
  '11.11.2020',
  '12.11.2020',
  '13.11.2020',
  '14.11.2020',
  '15.11.2020',
  '16.11.2020',
]

const CovidData = (data) => {
  return {
    labels: array_dates,
    datasets: [
      {
        label: 'Заразилось (чел.)',
        fill: false,

        pointBackgroundColor: '#ff0c13',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#ff0c13',

        data: data.map((i) => i.snapshot.infected),
      },
      {
        label: 'Вылечилось (чел.)',
        fill: false,
        /* hidden: true,*/
        pointBackgroundColor: '#00ff00',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#00ff00',
        data: data.map((i) => i.snapshot.cured),
      },
      {
        label: 'Летальных исходов (чел.)',
        fill: false,
        /*    hidden: true,*/
        pointBackgroundColor: '#000000',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',

        data: data.map((i) => i.snapshot.dead),
      },
      {
        label: 'Бессимптомных (чел.)',
        fill: false,
        /* hidden: true,*/
        pointBackgroundColor: '#fff200',
        pointBorderColor: 'white',
        borderWidth: 1,
        borderColor: '#fff200',
        data: data.map((i) => i.snapshot.asymptomatic),
      },
    ],
  }
}
