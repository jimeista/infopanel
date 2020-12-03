import React from 'react'

import InfoPanelTable from './InfoPanelTable'
import 'chartjs-plugin-piechart-outlabels'

import { memorandum } from './ChartOption'

import Emergency from './Modules/Emergency'
import Crimes from './Modules/Crimes'
import Accidents from './Modules/Accidents'
import School from './Modules/School'
import Preschool from './Modules/Preschool'
import Transport from './Modules/Transport'
import MBP from './Modules/MBP'
import OpenAlmaty from './Modules/OpenAlmaty'
import Covid from './Modules/Covid'

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
          <Covid />
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
