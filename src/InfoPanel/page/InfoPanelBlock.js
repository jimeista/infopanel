import React from 'react'
import { InfoPanelChart } from './InfoPanelChart'

import InfoPanelTable from './InfoPanelTable'
import 'chartjs-plugin-piechart-outlabels'

import { memorandum, CovidOptions, CovidData } from './ChartOption'

import Emergency from './Modules/Emergency'
import Crimes from './Modules/Crimes'
import Accidents from './Modules/Accidents'
import School from './Modules/School'
import Preschool from './Modules/Preschool'
import Transport from './Modules/Transport'
import MBP from './Modules/MBP'
import OpenAlmaty from './Modules/OpenAlmaty'

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
          <School />
          <Preschool />
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
          <Transport />
          <OpenAlmaty />
          <MBP />
        </div>
      </div>
    </div>
  )
}

export default InfoPanelBlock
