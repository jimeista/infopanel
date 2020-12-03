import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

import { Spinner } from '../Spinner'

const MBP = () => {
  const [loading, setLoading] = useState([])
  const [income, setIncome] = useState([])
  const [outcome, setOutcome] = useState([])

  useEffect(() => {
    setLoading(true)

    const fetch = async () => {
      await axios
        .get('/sc-budget/api/budget-reports?start=2020-06-24&end=2020-07-01')
        .then((res) => {
          let income_ = res.data.filter((i) =>
            i['budgeting-group-name'].toLowerCase().includes('доходы')
          )
          let outcome_ = res.data.filter((i) =>
            i['budgeting-group-name'].toLowerCase().includes('расходы')
          )

          setIncome(income_)
          setOutcome(outcome_)
          setLoading(false)
        })
    }

    fetch()
  }, [])

  const income_plan_total = useMemo(() => {
    return getTotal(income, 'plan')
  }, [income])

  const income_fact_total = useMemo(() => {
    return getTotal(income, 'fact')
  }, [income])

  const income_percentage = useMemo(() => {
    return (getTotal(income, 'fact') * 100) / getTotal(income, 'plan')
  }, [income])

  const outcome_plan_total = useMemo(() => {
    return getTotal(outcome, 'plan')
  }, [outcome])

  const outcome_fact_total = useMemo(() => {
    return getTotal(outcome, 'fact')
  }, [outcome])

  const outcome_percentage = useMemo(() => {
    return (getTotal(outcome, 'fact') * 100) / getTotal(outcome, 'plan')
  }, [outcome])

  return (
    <div className='InfoPanel_block mbp'>
      <span className='InfoPanel_Title'>Мониторинг бюджетных программ</span>
      {!loading ? (
        <div className='InfoPanel_block_info'>
          <div className='MBP_cardBlock'>
            <div className='MBP_card_wrap'>
              <div className='MBP_card'>
                <div className='MBP_card_title'>
                  <span>Расходы</span>
                  <span className='MBP_card_date'>
                    c 24.06.2020 <br /> по 01.07.2020{' '}
                  </span>
                </div>
              </div>
              <div className='MBP_card_block_wrap'>
                <div className='MBP_card_block'>
                  <span>План</span>
                  <span>{`${outcome_plan_total} млрд`}</span>
                  <span>тенге</span>
                </div>
                <div className='MBP_card_block'>
                  <span>Факт</span>
                  <span>{`${outcome_fact_total} млрд`}</span>
                  <span>тенге</span>
                </div>
              </div>
            </div>
            <div className='MBP_card_wrap'>
              <div className='MBP_card'>
                <div className='MBP_card_title'>
                  <span>Доходы</span>
                  <span className='MBP_card_date'>
                    c 24.06.2020 <br /> по 01.07.2020{' '}
                  </span>
                </div>
              </div>
              <div className='MBP_card_block_wrap'>
                <div className='MBP_card_block'>
                  <span>План</span>
                  <span>{`${income_plan_total} млрд`}</span>
                  <span>тенге</span>
                </div>
                <div className='MBP_card_block'>
                  <span>Факт</span>
                  <span>{`${income_fact_total} млрд`}</span>
                  <span>тенге</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`MBP_style_block`}>
            <div className={`MBP_style_block_card`}>
              <span>Расходы</span>
              <div className={`color_progress`}>
                <span style={{ width: `${Math.round(outcome_percentage)}%` }}>
                  Исполнение на текущий год
                </span>
              </div>
              <span>{`${Math.round(outcome_percentage)}%`}</span>
            </div>
            <div className={`MBP_style_block_card`}>
              <span>Доходы</span>
              <div className={`color_progress`}>
                <span
                  className={'mbp_percentage_income_wrap'}
                  style={{ width: `${Math.round(income_percentage)}%` }}
                >
                  <span className={'mbp_percentage_income'}>
                    {' '}
                    Исполнение на текущий год
                  </span>
                </span>
              </div>
              <span>{`${Math.round(income_percentage)}%`}</span>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default React.memo(MBP)

const getTotal = (data, key) => {
  let count = 0

  data.forEach((i) => {
    count = count + i[key] / 1000000000
  })

  return Math.round(count)
}
