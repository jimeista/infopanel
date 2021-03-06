import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import { InfoPanelChart } from '../InfoPanelChart'
import { ChS_option } from '../ChartOption'

// ЧС
const Emergency = ({ config }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true) // состояние спиннера

  // инициализация данных
  useEffect(() => {
    setLoading(true)
    const fetch = async () => {
      await axios
        .get(
          '/sc-api-gateway/secured/_/sc-dispatching-services/api/chs',
          config
        )
        .then((res) => {
          setData(res.data.slice(res.data.length - 7, res.data.length))
          setLoading(false)
        })
    }

    if (config) fetch()
  }, [config])

  return (
    <div
      className='InfoPanel_block ChS'
      onClick={() => {
        window.open(
          'https://sc.smartalmaty.kz/main/monitoring-emergency',
          '_blank'
        )
      }}
    >
      <span className='InfoPanel_Title'>Мониторинг чрезвычайных ситуаций</span>
      <div className={`chart_block`}>
        <div className='InfoPanel_block_info'>
          {loading ? (
            <Spinner />
          ) : (
            <InfoPanelChart
              typeChart={'Bar'}
              option={ChS_option}
              dataSet={getEmergencyChartData(data)}
            />
          )}
        </div>
        <div className='text_info_block'>
          <div>
            <div className='first_chart_block_info'>
              <span className='chart_block_info suffered_text'>Пострадало</span>
              <div>
                <span>Всего:</span>
                <span>{getTotalCount(data, 'count-suffered')}</span>
              </div>
              <div>
                <span>Детей:</span>
                <span>{getTotalCount(data, 'count-suffered-child')}</span>
              </div>
            </div>
            <div className='first_chart_block_info'>
              <span className='chart_block_info rescued_text'>Спасено</span>
              <div>
                <span>Всего:</span>
                <span>{getTotalCount(data, 'count-saved')}</span>
              </div>
              <div>
                <span>Детей:</span>
                <span>{getTotalCount(data, 'count-saved-child')}</span>
              </div>
            </div>
          </div>
          <div>
            <div className='first_chart_block_info'>
              <span className='chart_block_info evacuated_text'>
                Эвакуировано
              </span>
              <div>
                <span>Всего:</span>
                <span>{getTotalCount(data, 'count-evacuated')}</span>
              </div>
              <div>
                <span>Детей:</span>
                <span>{getTotalCount(data, 'count-evacuated-child')}</span>
              </div>
            </div>
            <div className='first_chart_block_info'>
              <span className='chart_block_info lost_text'>Погибло</span>
              <div>
                <span>Всего:</span>
                <span>{getTotalCount(data, 'count-dead')}</span>
              </div>
              <div>
                <span>Детей:</span>
                <span>{getTotalCount(data, 'count-dead-child')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Emergency)

/*Преобразование данных под структуру chartjs*/
const getEmergencyChartData = (data) => {
  let labels = data.map(
    (i) =>
      `${i.date.split('-')[2]}.${i.date.split('-')[1]}.${i.date
        .split('-')[0]
        .slice(0, 2)}`
  )

  let datasets = [
    {
      label: 'ЧС, в том числе:',
      backgroundColor: '#d3b521',
      data: data.map(
        (i) => i.values.find((v) => v.type === 'ЧС')['count-emergencies']
      ),
      /*fontSize: '22'*/
    },
    {
      label: 'пожары',
      backgroundColor: '#be4c4c',
      data: data.map(
        (i) => i.values.find((v) => v.type === 'ЧС')['fired-emergencies']
      ),
      /*fontSize: '22'*/
    },
    {
      label: 'прочее',
      backgroundColor: '#4a90e2',
      data: data.map(
        (i) => i.values.find((v) => v.type === 'ЧС')['other-emergencies']
      ),
      /*fontSize: '22'*/
    },
  ]

  return { labels, datasets }
}

// вспомогательная функция подсчета по ключам
const getTotalCount = (data, key) => {
  let count = 0

  data.forEach((i) => {
    let emergency = i.values.find((v) => v.type === 'ЧС')
    count = count + emergency[key]
  })

  return count
}
