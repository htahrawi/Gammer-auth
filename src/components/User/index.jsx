import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../../config/api";

import Avatar from "../../assets/Avatar.png";

import { TbLogout } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

import "./style.css";
  
const User = ({logout}) =>  {
//   state = {
//     userName: "",
//     admin: "",
//     isLoading: true,
//   };
const [value, setValue] = useState({
    userName: "",
    admin: "",
    isLoading: true,
})
//   async componentDidMount() {
//     const token = localStorage.getItem("token");
//     const res = await axios.get(`${process.env.REACT_APP_AUTH_APT}/users/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     this.setState({
//       userName: res.data.name,
//       admin: res.data.isAdmin,
//       isLoading: false,
//     });
//   }
// useEffect(()=>{
//     const token = localStorage.getItem("token");
//     const res =  axios.get(`${process.env.REACT_APP_AUTH_APT}/users/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setValue({
//       userName: res.data.name,
//       admin: res.data.isAdmin,
//       isLoading: false,
//     });
// },[])
    return (
      <div className="profile">
        <div>
          <div className="info">
            <h2>Welcome back,</h2>
            <h2>{value.userName}</h2>
          </div>
          <Link to="/profile">
            <img title="profile" src={Avatar} alt="Profile" />
          </Link>
          {value.admin ? (
            <Link to="/usersList" className="users__list">
              <FaUsers />
              <p>Users List</p>
            </Link>
          ) : (
            ""
          )}
          <TbLogout
            title="logout"
            className="icon"
            onClick={logout}
          />
        </div>
      </div>
    );
  }

  export default User