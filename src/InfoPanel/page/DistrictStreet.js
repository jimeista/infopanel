import React, { useState, useContext } from "react";
import { Menu, Dropdown, Button, Input, Typography, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import testtt from "../FakeData";
/*import { ClearAll } from "@material-ui/icons";*/
const jp = require("jsonpath");
const DistrictStreet = ({ titleBtn }) => {
  const [district, setDistrict] = useState([
    ...new Set(jp.query(testtt, "$..microdistrict")),
  ]);
  const [street, setStreet] = useState([
    ...new Set(jp.query(testtt, "$..street")),
  ]);
  const [districtFilter, setDistrictFilter] = useState(district);
  const [streetFilter, setStreetFilter] = useState(street);
  const [tempStreetFilter, setTempStreetFilter] = useState([]);
  const [streettCheck, setStreetCheck] = useState([]);
  const [disttCheck, setDisttCheck] = useState([]);

  const [visible, setVisible] = useState(false);
  const filterDistr = (e) => {
    /*  console.log(e.target.value);*/
    let disfil = district.filter((el) =>
      el.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setDistrictFilter(disfil);
    let distCH = disttCheck;
    updateStreet(disfil);
    setDisttCheck(distCH);
  };
  const filterStreet = (e) => {
    if (e !== "") {
      setTempStreetFilter(
        streetFilter.filter((el) =>
          el.toUpperCase().includes(e.target.value.toUpperCase())
        )
      );
    } else {
      setTempStreetFilter([]);
    }
  };

  const updateStreet = (event) => {
    setDisttCheck(event);
    if (event.length === 0) {
      setStreetFilter(street);
      return;
    }
    let arrStreet = [];
    for (let i = 0; i < event.length; i++) {
      arrStreet.push(
        jp.query(testtt, `$..crimes[?(@.microdistrict=='${event[i]}')].street`)
      );
    }
    arrStreet = [...new Set(arrStreet.flatMap((el) => el))];
    setStreetFilter(arrStreet);
  };
  const clearAll = () => {
    setDisttCheck([]);
    setStreetCheck([]);
  };
  const saveChecked = () => {
    /*  console.log(disttCheck, streettCheck);*/
  };
  const menu = (
    <Menu className="ant_drop_block">


      <Menu.Item key="2" className="ant_drop_block_item">

          <Checkbox.Group
            value={disttCheck}
            onChange={updateStreet}
            options={districtFilter}
            className="ant_drop_block_item_list"
          />

      </Menu.Item>
      <Menu.Item key="6" className="ant_drop_block_item">
        <div className="ant_drop_block_btn">
          <span className="default_btn_style">Сбросить</span>
          <span className="default_btn_style">Применить</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      visible={visible}
      onVisibleChange={(val) => setVisible(val)}
      className="ant_drop_menu"
    >
      <Button className="ant_drop_btn">
        {titleBtn} <DownOutlined />
      </Button>
    </Dropdown>
  );
};



export default DistrictStreet;
