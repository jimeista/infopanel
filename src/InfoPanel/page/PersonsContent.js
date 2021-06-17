import React, { useEffect, useState } from 'react'

// import UserInfo from './UserInfo'
// import photo1 from './faces/ea825f48a30b953a396a29a54752ff68.png'
import axios from 'axios'

// боковая навигаци по должностям
const PersonsContent = ({ setCurrentAkim, config }) => {
  const [users, setUsers] = useState([])

  // инициализация пользователей
  useEffect(() => {
    const fetch = async () => {
      // const hash = localStorage.getItem('userhash')
      await axios
        .get('/sc-api-gateway/acl/supervisors', { config })
        .then((res) => {
          // console.log(res.data)
          setUsers(res.data)
        })
    }
    if (config) fetch()
  }, [config])

  return (
    <div className='Home_navigation_page_content_persons_profiles'>
      {users.map((value, index) => {
        return (
          <div
            key={index}
            className={`card_block_unit_wrap`}
            onClick={() => {
              setCurrentAkim(index + 1)
            }}
          >
            <div className={`card_block_unit`}>
              {/*<div>{value.img}</div>*/}
              <div>{value.name}</div>
              <div className={`card_block_unit_img`}>
                <img
                  src={`https://sc.smartalmaty.kz/sc-api-gateway${value['image-path']}`}
                  alt=''
                />
              </div>

              <div>
                {value['supervised-organisations'].map((el) => {
                  return index === 0 ? null : (
                    <span key={el.abbreviation}>{el.abbreviation}</span>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PersonsContent
