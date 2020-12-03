import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { InfoPanelChart } from '../InfoPanelChart'

import { ChS_option } from '../ChartOption'

const Emergency = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      await axios.get('/sc-dispatching-services/api/chs').then((res) => {
        setData(res.data.slice(res.data.length - 7, res.data.length))
      })
    }

    fetch()
  }, [])

  return (
    <div className='InfoPanel_block ChS'>
      <span className='InfoPanel_Title'>Мониторинг чрезвычайных ситуаций</span>
      <div className={`chart_block`}>
        <div className='InfoPanel_block_info'>
          <InfoPanelChart
            typeChart={'Bar'}
            option={ChS_option}
            dataSet={getEmergencyChartData(data)}
          />
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

//chart data
const getEmergencyChartData = (data) => {
  let labels = data.map(
    (i) =>
      `${i.date.split('-')[2]}.${i.date.split('-')[1]}.${i.date
        .split('-')[0]
        .slice(0, 2)}`
  )

  let datasets = [
    {
      label: 'ЧС',
      backgroundColor: '#d3b521',
      data: data.map(
        (i) => i.values.find((v) => v.type === 'ЧС')['count-emergencies']
      ),
      /*fontSize: '22'*/
    },
    {
      label: 'из них пожаров',
      backgroundColor: '#be4c4c',
      data: data.map(
        (i) => i.values.find((v) => v.type === 'ЧС')['fired-emergencies']
      ),
      /*fontSize: '22'*/
    },
    {
      label: 'из них прочее',
      backgroundColor: '#4a90e2',
      data: data.map(
        (i) => i.values.find((v) => v.type === 'ЧС')['other-emergencies']
      ),
      /*fontSize: '22'*/
    },
  ]

  return { labels, datasets }
}

//helper to count total number of key values
const getTotalCount = (data, key) => {
  let count = 0

  data.forEach((i) => {
    let emergency = i.values.find((v) => v.type === 'ЧС')
    count = count + emergency[key]
  })

  return count
}
