import React, { useState } from 'react'

import 'chartjs-plugin-piechart-outlabels'

import Emergency from './Modules/Emergency'
import Crimes from './Modules/Crimes'
import Accidents from './Modules/Accidents'
import School from './Modules/School'
import Preschool from './Modules/Preschool'
import Transport from './Modules/Transport'
import MBP from './Modules/MBP'
import OpenAlmaty from './Modules/OpenAlmaty'
import Covid from './Modules/Covid'
import Memorandum from './Modules/Memorandum'
import PersonsContent from './PersonsContent'

const InfoPanelBlock = () => {
  const toogleRightSide = () => {
    document
      .querySelector('.Home_navigation_page_right_side')
      .classList.toggle('active')
  }
  const [currentAkim, setCurrentAkim] = useState(1)
  const handleDragShowHide = (event) => {
    if (event.clientY === 0) {
      return
    }
  }

  return (
    <div className='InfoPanel_main'>
      <div className='InfoPanel_wrapper'>
        <div className='InfoPanel_title_wrap'>
          <span className='InfoPanel_title main'>Информационная панель</span>
        </div>
        <div className={`InfoPanel_wrap user_${currentAkim}`}>
          <Memorandum />
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
      <div className='Home_navigation_page_right_side'>
        <button
          id='Home_navigation_page_right_side_showAndHide'
          className='Home_navigation_page_right_side_showAndHide'
          onClick={toogleRightSide}
          onDrag={handleDragShowHide}
        >
          <span>Руководство города</span>
        </button>
        <PersonsContent setCurrentAkim={setCurrentAkim} />
      </div>
    </div>
  )
}

export default InfoPanelBlock
