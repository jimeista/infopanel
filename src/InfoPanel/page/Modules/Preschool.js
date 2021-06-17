import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import { firstPieOption_bar } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'

const PreSchool = ({ config }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState([]) // состояние спиннера

  // инициализация данных
  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      let ob = {}
      await axios
        .get(
          '/sc-api-gateway/secured/_/sc-edu-institutions/api/kindergartens',
          config
        )
        .then((res) => {
          districts.forEach((d) => {
            let arr = res.data.filter(
              (i) => i.district === d && i.status === 'Дефицит'
            )
            ob = { ...ob, [d]: arr }
          })
        })
      setData(ob)
      setLoading(false)
    }

    if (config) fetch()
  }, [config])

  return (
    <div
      className='InfoPanel_block preschool'
      onClick={() => {
        window.open(
          'https://sc.smartalmaty.kz/main/monitoring-kindergardens',
          '_blank'
        )
      }}
    >
      {/* статистика */}
      <div className={`InfoPanel_block_header`}>
        <span className='InfoPanel_Title'>
          Дефицит мест в детских садах по районам
        </span>
        <div className={`InfoPanel_block_card_wrap`}>
          <div className='InfoPanel_block_card'>
            <span>Количество детей в детских садах</span>
            <span>{getTotalStudentsCount(data)}</span>
          </div>
          <div className='InfoPanel_block_card'>
            {getTotalCountFullness(data)}
          </div>
        </div>
      </div>
      <div className='InfoPanel_block_info'>
        {!loading ? (
          <InfoPanelChart
            typeChart={'Bar'}
            option={firstPieOption_bar}
            dataSet={firstPieData_bar(data)}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default React.memo(PreSchool)

// дефолтные опции районов
const districts = [
  'Алатауский район',
  'Алмалинский район',
  'Ауэзовский район',
  'Бостандыкский район',
  'Жетысуский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
]

// вспомогательная функция подсчета заполняемости
const getTotalStudentsCount = (data) => {
  let count = 0

  Object.keys(data).forEach((key) => {
    data[key].forEach((i) => {
      count = count + i.fullness
    })
  })

  return count
}

// вспомогательная функция подсчета дефицита
const getTotalCountFullness = (data) => {
  let capacity = 0
  let storage = 0

  Object.keys(data).forEach((key) => {
    data[key].forEach((i) => {
      capacity = capacity + i['capacity']
      storage = storage + i['fullness']
    })
  })

  return (
    <>
      <span>{storage - capacity > 0 ? 'Дефицит' : 'Профицит'}</span>
      <span
        style={{
          color: `${storage - capacity > 0 ? '#f75b5b' : 'lightgreen'}`,
        }}
      >
        {Math.abs(storage - capacity)}
      </span>
    </>
  )
}

/*Преобразование данных под структуру chartjs*/
const firstPieData_bar = (data) => {
  return {
    labels: Object.keys(data).map((label) => label.split(' ')[0]),
    datasets: [
      {
        label: 'Проектная мощность',
        backgroundColor: '#4caf50',
        stack: 'Stack 0',
        data: Object.values(data).map((arr) =>
          arr.reduce((sum, next) => sum + next['capacity'], 0)
        ),
        minBarLength: 10,
      },
      {
        label: 'Дефицит мест',
        backgroundColor: '#f75b5b',
        stack: 'Stack 0',
        data: Object.values(data).map((arr) =>
          Math.abs(arr.reduce((sum, next) => sum + next['general-shortage'], 0))
        ),
        minBarLength: 20,
      },
    ],
  }
}
