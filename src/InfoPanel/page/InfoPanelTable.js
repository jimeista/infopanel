import React from "react";
import {Table} from "antd";

const InfoPanelTable = ({data}) => {
    const columns = [
        {
            /**/
            title: "Индикатор",
            dataIndex: "indicatorName",

        },
        {
            /**/
            title: "План",
            dataIndex: "plan",

        },
        {
            /**/
            title: "Факт ",
            dataIndex: "fact",

        },
        {
            /**/
            title: "Ед. изм",
            dataIndex: "itemUnit",

        },

    ];

    return <Table columns={columns} dataSource={data} pagination={false}/>;
};

export default InfoPanelTable;
