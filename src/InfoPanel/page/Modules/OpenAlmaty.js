import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import { openAlmaty_option } from '../ChartOption'
import { InfoPanelChart } from '../InfoPanelChart'

const OpenAlamty = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      await axios
        .post('/sc-openalmaty/api/appeals', {
          start: '2020-11-26',
          end: '2020-12-03',
        })
        .then((res) => {
          console.log(res)
          setData(res.data)
          setLoading(false)
        })
    }

    fetch()
  }, [])

  return (
    <div className='InfoPanel_block openAlmaty'>
      <span className='InfoPanel_Title'>Мониторинг обращений Open Almaty</span>
      <div className='InfoPanel_block_info openAlmaty_wrap'>
        <div className={`openAlmaty_item`}>
          <div className={`openAlmaty_all`}>
            <span>Обращения</span>
            <span>с 26.11.2020 по 03.12.2020</span>
            <span>{data.length}</span>
          </div>
          <div className={`openAlmaty_item_wrap`}>
            <div className={`openAlmaty_item`}>
              <span>Жалобы</span>
              <span>
                {data.filter((i) => i['appeal-type'] === 'Жалоба').length}
              </span>
            </div>
            <div className={`openAlmaty_item`}>
              <span>Заявления </span>
              <span>
                {data.filter((i) => i['appeal-type'] === 'Заявление').length}
              </span>
            </div>
          </div>
        </div>
        <div className='openAlmaty_item_chart'>
          {!loading ? (
            <InfoPanelChart
              typeChart={'Bar'}
              option={openAlmaty_option}
              dataSet={() => openAlmaty_data(data)}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(OpenAlamty)

/*OpenAlmaty*/

export const openAlmaty_data = (data) => {
  let data_ = {}

  data.forEach((i) => {
    if (data_[i.source]) {
      data_ = { ...data_, [i.source]: data_[i.source] + 1 }
    } else {
      data_ = { ...data_, [i.source]: 1 }
    }
  })

  return {
    labels: Object.keys(data_),
    datasets: [
      {
        label: 'Факт',
        backgroundColor: ['#45c374', '#e97223', '#8ccbdf', '#cdb748'],
        data: Object.values(data_),
        /*fontSize: '22'*/
      },
    ],
  }
}
