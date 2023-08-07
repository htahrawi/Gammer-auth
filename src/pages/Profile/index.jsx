import React, { useState } from "react";

// import axios from "axios";
// import { API_URL } from "./../../config/api";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Avatar from "../../assets/Avatar.png";

import "./style.css";
import User from "../../components/User";
import SideBar from "../../components/SideBar";

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
  // async componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   const res = await axios.get(`${API_URL}/users/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   this.setState({
  //     userName: res.data.name,
  //     email: res.data.email,
  //     admin: res.data.isAdmin,
  //     isLoading: false,
  //   });
  // }

  return (
    <div className="home">
      <SideBar />
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
          <h1>{info.userName}'s Profile</h1>
          {info.isLoading ? (
            "Loading..."
          ) : (
            <div className="profile_info">
              <p>Name:</p>
              <p className="user_info">{info.userName}</p>
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
