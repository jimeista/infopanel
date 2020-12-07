import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import { firstPieOption_bar } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'

const PreSchool = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      let ob = {}
      await axios.get('/sc-edu-institutions/api/kindergartens').then((res) => {
        districts.forEach((d) => {
          let arr = res.data.filter((i) => i.district === d)
          ob = { ...ob, [d]: arr }
        })
      })
      setData(ob)
      setLoading(false)
    }

    fetch()
  }, [])

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
            <span>Дефицит мест</span>
            <span>{getTotalCountFullness(data)}</span>
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

const districts = [
  'Алмалинский район',
  'Алатауский район',
  'Ауэзовский район',
  'Бостандыкский район',
  'Жетысуский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
]

const getTotalStudentsCount = (data) => {
  let count = 0

  Object.keys(data).forEach((key) => {
    data[key].forEach((i) => {
      count = count + i.capacity
    })
  })

  return count
}

const getTotalCountFullness = (data) => {
  let count = 0

  Object.keys(data).forEach((key) => {
    data[key].forEach((i) => {
      count = count + i['general-shortage']
    })
  })

  return count
}

/*Школы дет сады*/
const firstPieData_bar = (data) => {
  let storage = []
  let fullness = []

  Object.keys(data).forEach((key) => {
    let count = 0
    data[key].forEach((i) => {
      count = count + i.capacity
    })
    storage.push(count)
  })

  Object.keys(data).forEach((key) => {
    let count = 0
    data[key].forEach((i) => {
      if (i.status === 'Дефицит') {
        count = count + i['general-shortage']
      }
    })
    fullness.push(count)
  })

  return {
    labels: districts.map((i) => i.split(' ')[0]),
    datasets: [
      {
        label: 'Проектная мощность',
        backgroundColor: '#4caf50',
        stack: 'Stack 0',
        data: storage,
        minBarLength: 12,
      },
      {
        label: 'Дефицит мест',
        backgroundColor: '#f75b5b',
        stack: 'Stack 0',
        data: fullness,
        minBarLength: 17,
      },
    ],
  }
}
