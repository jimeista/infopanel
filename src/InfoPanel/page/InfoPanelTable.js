import React from 'react'
import { Table } from 'antd'

// компонента таблицы меморандума
const InfoPanelTable = ({ data }) => {
  // инициализация колонок таблицы
  const columns = [
    {
      /**/
      title: 'Индикатор',
      dataIndex: 'indicatorName',
      key: 'indicatorName',
    },
    {
      /**/
      title: 'План',
      dataIndex: 'plan',
      key: 'plan',
    },
    {
      /**/
      title: (
        <span>
          Факт <br /> 9 мес.
        </span>
      ),
      dataIndex: 'fact',
      key: 'fact',
    },
    {
      /**/
      title: 'Ед. изм',
      dataIndex: 'itemUnit',
      key: 'itemUnit',
    },
  ]

  return <Table columns={columns} dataSource={data} pagination={false} />
}

export default InfoPanelTable
