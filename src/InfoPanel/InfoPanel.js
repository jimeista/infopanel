import React from 'react'

import InfoPanelBlock from './page/InfoPanelBlock'

import 'antd/dist/antd.css'
import './InfoPanel.css'

const InfoPanel = ({ config }) => {
  return <InfoPanelBlock config={config} />
}

export default InfoPanel
