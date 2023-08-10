import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../assets/Avatar.png";
import { TbLogout } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import "./style.css";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useAuthContext } from '../../contexts/AuthContext';
import axios from "axios";
import { AUTH_API } from "../../config/api";
import { AUTH_API_PATHS } from "../../constants/auth";
import { PATHS } from "../../router/paths";

const User = () => {
  
  const {logout} = useAuthContext();
  const token = localStorage?.getItem('token')
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    userName: "",
    admin: "",
    isLoading: true,
  })
  const handleLogout = async () => {
    logout()
    navigate(PATHS.LOGIN, {replace: true})
  }
  useEffect(() => {
    const getProfileInfo = async () => {
      try {
        const res = await axios.get(AUTH_API + AUTH_API_PATHS.PROFILE, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setInfo(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProfileInfo();
  }, [])
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
  const { theme } = useThemeContext()
  return (
    < div className="profile" >
      <div>
        <div className="info">
          <h2 className={`${theme}_mode`}>Welcome, {info.name}</h2>
          {/* <h2 className={`${theme}_mode`}>{info.name}</h2> */}
        </div>
        <Link to="/profile">
          <img title="profile" src={Avatar} alt="Profile" />
        </Link>
        {info.admin ? (
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
          onClick={handleLogout}
        />
      </div>
    </div >
  );
}

export default User