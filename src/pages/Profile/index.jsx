import React, { useEffect, useState } from "react";

// import axios from "axios";
// import { API_URL } from "./../../config/api";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Avatar from "../../assets/Avatar.png";

import "./style.css";
import User from "../../components/User";
import SideBar from "../../components/SideBar";
import axios from "axios";
import { AUTH_API } from '../../config/api'
import { AUTH_API_PATHS } from "../../constants/auth";

const Profile = () => {
  // state = {
  //   userName: "",
  //   email: "",
  //   admin: "",
  //   isLoading: true,
  // };
  const [info, setInfo] = useState({
    userName: "",
    email: "",
    admin: "",
    isLoading: true,
  });
  useEffect(() => {
    const token = localStorage?.getItem('token')
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
  return (
    <div className="home">
      {/* <SideBar /> */}
      <main className="usersMain">
        <User />
        <Link to="/" className="Back">
          <p>
            <IoIosArrowBack />
            Back
          </p>
        </Link>
        <div className="account">
          <img src={Avatar} alt="profile" />
          <h1>{info.name}'s Profile</h1>
          {info.isLoading ? (
            "Loading..."
          ) : (
            <div className="profile_info">
              <p>Name:</p>
              <p className="user_info">{info.name}</p>
              <p>Email:</p>
              <p className="user_info">{info.email}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
