import React, { useState } from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'

// компонента дропдауна с чекбоксом
const CheckBoxMenu = ({ titleBtn, checkBox }) => {
  const [visible, setVisible] = useState(false)

  //меню чекбокса
  const menu = (
    <Menu className='ant_drop_block'>
      <div>
        <Checkbox.Group
          className='ant_drop_block_Checkbox'
          options={checkBox}
        />
      </div>
    </Menu>
  )
  //отрисовка дропдауна
  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      visible={visible}
      onVisibleChange={(val) => setVisible(val)}
      className='ant_drop_menu'
    >
      <Button className='ant_drop_btn'>
        {titleBtn}
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default CheckBoxMenu
