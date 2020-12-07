import React, { useEffect, useState } from 'react'

import UserInfo from './UserInfo'
import photo1 from './faces/ea825f48a30b953a396a29a54752ff68.png'
import axios from 'axios'

const PersonsContent = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      let ob = {}
      const hash = localStorage.getItem('userhash')
      await axios
        .get('/sc-api-gateway/acl/supervisors', {
          headers: {
            Authorization: `Basic ${hash}`,
          },
        })
        .then((res) => {
          // console.log(res.data)
          setUsers(res.data)
        })
    }
    fetch()
  }, [])

  return (
    <div className='Home_navigation_page_content_persons_profiles'>
      {users.map((value, index) => {
        return (
          <div
            key={index}
            className={`card_block_unit_wrap`}
            onClick={() => {
              props.setCurrentAkim(index + 1)
            }}
          >
            <div className={`card_block_unit`}>
              {/*<div>{value.img}</div>*/}
              <div>{value.name}</div>
              <div className={`card_block_unit_img`}>
                <img src={value['image-path']} alt='' />
              </div>

              <div>
                {value['supervised-organisations'].map((el) => (
                  <span key={el.abbreviation}>
                    {el.abbreviation ? el.abbreviation : 'Аким города'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PersonsContent
