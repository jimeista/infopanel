import React from 'react'
import { Spin } from 'antd'

// компонента загрузки страницы при запросе
export const Spinner = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin size='large' />
    </div>
  )
}
