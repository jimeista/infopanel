import React from 'react'
import { InfoPanelChart } from './InfoPanelChart'

import InfoPanelTable from './InfoPanelTable'
import 'chartjs-plugin-piechart-outlabels'

import {
  memorandum,
  firstPieData_bar,
  firstPieOption_bar,
  CovidOptions,
  CovidData,
  dtp_data,
  dtp_option,
  transport_data,
  transport_option,
  openAlmaty_data,
  openAlmaty_option,
} from './ChartOption'
/*import InfoPanelTable from "./InfoPanelTable";*/

import Emergency from './Modules/Emergency'
import Crimes from './Modules/Crimes'
import Accidents from './Modules/Accidents'

const InfoPanelBlock = () => {
  return (
    <div className='InfoPanel_main'>
      <div className='InfoPanel_wrapper'>
        <div className='InfoPanel_title_wrap'>
          <span className='InfoPanel_title'>Информационная панель</span>
        </div>
        <div className='InfoPanel_wrap user_1'>
          <div className='InfoPanel_block memorandum'>
            <span className='InfoPanel_Title'>
              Меморандум 2020 года между Акимом и Премьер-Министром РК
            </span>
            <div className='InfoPanel_block_info'>
              <InfoPanelTable data={memorandum} />
            </div>
          </div>
          <div className='InfoPanel_block school '>
            <div className={`InfoPanel_block_header`}>
              <span className='InfoPanel_Title'>Дефицит мест в школах</span>
              <div className={`InfoPanel_block_card_wrap`}>
                <div className='InfoPanel_block_card'>
                  <span>Количество детей в школах</span>
                  <span>123</span>
                </div>
                <div className='InfoPanel_block_card'>
                  <span>Дефицит мест</span>
                  <span>123</span>
                </div>
              </div>
            </div>
            <div className='InfoPanel_block_info'>
              <InfoPanelChart
                typeChart={'Bar'}
                option={firstPieOption_bar}
                dataSet={firstPieData_bar}
              />
            </div>
          </div>
          <div className='InfoPanel_block preschool'>
            <div className={`InfoPanel_block_header`}>
              <span className='InfoPanel_Title'>
                Дефицит мест в детских садах
              </span>
              <div className={`InfoPanel_block_card_wrap`}>
                <div className='InfoPanel_block_card'>
                  <span>Количество детей в садиках</span>
                  <span>123</span>
                </div>
                <div className='InfoPanel_block_card'>
                  <span>Дефицит мест</span>
                  <span>123</span>
                </div>
              </div>
            </div>
            <div className='InfoPanel_block_info'>
              <InfoPanelChart
                typeChart={'Bar'}
                option={firstPieOption_bar}
                dataSet={firstPieData_bar}
              />
            </div>
          </div>
          <div className='InfoPanel_block covid'>
            <div className={`header_block`}>
              <div className={`InfoPanel_Title_wrap`}>
                <span className='InfoPanel_Title'>Динамика Covid-19</span>
                <span className='InfoPanel_Title'>
                  за период с 10.10.2020 по 20.10.2020
                </span>
              </div>
              <div className={`card_header_wrap`}>
                <div className='card_header'>
                  <span>Всего симптомных</span>
                  <span>123</span>
                </div>
                <div className='card_header'>
                  <span>Всего бессимптомных</span>
                  <span>123</span>
                </div>
                <div className='card_header'>
                  <span>Всего вылечившихся</span>
                  <span>123</span>
                </div>
                <div className='card_header'>
                  <span>Всего летальных</span>
                  <span>123</span>
                </div>
              </div>
            </div>
            <div className='InfoPanel_block_info'>
              <InfoPanelChart
                typeChart={'Line'}
                option={CovidOptions}
                dataSet={CovidData}
              />
            </div>
          </div>
          <Crimes />
          <Accidents />
          <Emergency />
          <div className='InfoPanel_block transport'>
            <span className='InfoPanel_Title transportFlow'>
              Мониторинг выхода общественного транспорта по часам
            </span>
            <div className='InfoPanel_block_info'>
              <InfoPanelChart
                typeChart={'HorizontalBar'}
                option={transport_option}
                dataSet={transport_data}
              />
            </div>
          </div>
          <div className='InfoPanel_block openAlmaty'>
            <span className='InfoPanel_Title'>
              Мониторинг обращений Open Almaty
            </span>
            <div className='InfoPanel_block_info openAlmaty_wrap'>
              <div className={`openAlmaty_item`}>
                <div className={`openAlmaty_all`}>
                  <span>Обращения</span>
                  <span>с 22.11.2020 по 29.11.2020</span>
                  <span>2429</span>
                </div>
                <div className={`openAlmaty_item_wrap`}>
                  <div className={`openAlmaty_item`}>
                    <span>Жалобы</span>
                    <span>209</span>
                  </div>
                  <div className={`openAlmaty_item`}>
                    <span>Заявления </span>
                    <span>209</span>
                  </div>
                </div>
              </div>
              <div className='openAlmaty_item_chart'>
                <InfoPanelChart
                  typeChart={'Bar'}
                  option={openAlmaty_option}
                  dataSet={openAlmaty_data}
                />
              </div>
            </div>
          </div>
          <div className='InfoPanel_block mbp'>
            <span className='InfoPanel_Title'>
              Мониторинг бюджетных программ
            </span>
            <div className='InfoPanel_block_info'>
              <div className='MBP_cardBlock'>
                <div className='MBP_card_wrap'>
                  <div className='MBP_card'>
                    <div className='MBP_card_title'>
                      <span>Расходы</span>
                      <span className='MBP_card_date'>
                        c 02.09.2020 <br /> по 02.12.2020{' '}
                      </span>
                    </div>
                  </div>
                  <div className='MBP_card_block_wrap'>
                    <div className='MBP_card_block'>
                      <span>План</span>
                      <span>10 млрд</span>
                      <span>тенге</span>
                    </div>
                    <div className='MBP_card_block'>
                      <span>Факт</span>
                      <span>6 млрд</span>
                      <span>тенге</span>
                    </div>
                  </div>
                </div>
                <div className='MBP_card_wrap'>
                  <div className='MBP_card'>
                    <div className='MBP_card_title'>
                      <span>Доходы</span>
                      <span className='MBP_card_date'>
                        c 02.09.2020 <br />
                        по 02.12.2020{' '}
                      </span>
                    </div>
                  </div>
                  <div className='MBP_card_block_wrap'>
                    <div className='MBP_card_block'>
                      <span>План</span>
                      <span>73 млрд</span>
                      <span>тенге</span>
                    </div>
                    <div className='MBP_card_block'>
                      <span>Факт</span>
                      <span>0</span>
                      <span>тенге</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`MBP_style_block`}>
                <div className={`MBP_style_block_card`}>
                  <span>Расходы</span>
                  <div className={`color_progress`}>
                    <span style={{ width: '80%' }}>
                      Исполнение на текущий год
                    </span>
                  </div>
                  <span> 98%</span>
                </div>
                <div className={`MBP_style_block_card`}>
                  <span>Доходы</span>
                  <div className={`color_progress`}>
                    <span style={{ width: '80%' }}>
                      Исполнение на текущий год
                    </span>
                  </div>
                  <span> 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPanelBlock
