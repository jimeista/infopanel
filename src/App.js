import React, { useEffect, useState } from 'react'

import InfoPanel from './InfoPanel/InfoPanel'

import { getCookie } from './utils/auth'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    const cookie = JSON.parse(getCookie('usertoken'))

    if (cookie) setConfig({ headers: cookie })
  }, [])

  return <InfoPanel config={config} />
}

export default App
