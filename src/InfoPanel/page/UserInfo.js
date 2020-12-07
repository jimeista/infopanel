import React from "react";



const UserInfo = ({ name, position, img }) => {
  return (


      <div><img src={img} alt={name}/>


          <p>{name}</p>


          <p>{position}</p>
      </div>


  );
};

export default UserInfo;
