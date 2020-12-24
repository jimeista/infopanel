import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'
import InfoPanelTable from '../InfoPanelTable'

const Memorandum = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      let ob = {}
      for (let m of memorandum) {
        await axios
          .get(`/sc-analytic-indicators/api/indicators/${m.id}/indexes`)
          .then((res) => {
            let item = res.data.find((i) => i.date === '2020-12-31')
            ob[m.indicatorName] = {
              key: m.indicatorName,
              indicatorName: m.indicatorName,
              fact: item && item.fact ? item.fact : '-',
              plan: item && item.planned ? item.planned : '-',
              itemUnit: item && item.measurement ? item.measurement : '-',
            }
          })
      }
      setData(ob)
      setLoading(false)
    }

    fetch()
  }, [])

  return (
    <div className='InfoPanel_block memorandum'>
      <span className='InfoPanel_Title'>
        Меморандум 2020 года между Акимом и Премьер-Министром РК
      </span>
      <div className='InfoPanel_block_info'>
        {!loading ? <InfoPanelTable data={Object.values(data)} /> : <Spinner />}
      </div>
    </div>
  )
}

export default React.memo(Memorandum)

const memorandum = [
  {
    item: 1,
    indicatorName: 'Индекс физического объема валового регионального продукта',
    id: 10303,
  },
  {
    item: 2,
    indicatorName: 'Рост налоговых и неналоговых поступлений в местный бюджет',
    id: 10308,
  },
  {
    item: 3,
    indicatorName: 'Рост объема несырьевого экспорта',
    id: 8519,
  },
  {
    item: 4,
    indicatorName:
      'Индекс физического объема выпуска продукции субъектами малого и среднего бизнеса',
    id: 8298,
  },
  {
    item: 5,
    indicatorName: 'Валовая добавленная стоимость малого и среднего бизнеса',
    id: 10305,
  },
  {
    item: 6,
    indicatorName:
      'Номинальный рост инвестиций в основной капитал (за исключением инвестиций из государственного бюджета), в % к предыдущему году',
    id: 9003,
  },
  {
    item: 7,
    indicatorName: 'Уровень безработицы',
    id: 5082,
  },
  {
    item: 8,
    indicatorName: 'Стандартизованный коэффициент смертности',
    id: 3848,
  },
  {
    item: 9,
    indicatorName: 'Материнская смертность',
    id: 10340,
  },
  {
    item: 10,
    indicatorName: 'Младенческая смертность',
    id: 4130,
  },
  {
    item: 11,
    indicatorName: 'Охват детей 3-6 лет дошкольным воспитанием и обучением',
    id: 4399,
  },
  {
    item: 12,
    indicatorName: 'Количество созданных постоянных рабочих мест',
    id: 3738,
  },
  {
    item: 13,
    indicatorName: 'Общая площадь введенных в эксплуатацию жилых зданий',
    id: 7936,
  },
  {
    item: 14,
    indicatorName:
      'Доля обеспеченности доступа в городах к центральному водоснабжению',
    id: 870,
  },
  {
    item: 15,
    indicatorName:
      'Доля обеспеченности доступа в городах к центральному водоотведению',
    id: 795,
  },
  {
    item: 16,
    indicatorName:
      'Доля обеспеченности доступа в городах к центральному газоснабжению',
    id: 10307,
  },
  {
    item: 17,
    indicatorName: 'Уровень преступности на 10 тысяч населения',
    id: 2358,
  },
  {
    item: 18,
    indicatorName:
      'Снижение числа погибших в дорожно-транспортных происшествиях на 100 пострадавших',
    id: 2038,
  },
]
