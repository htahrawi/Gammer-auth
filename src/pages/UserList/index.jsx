import React, { useEffect, useState } from "react";

// import axios from "axios";
import { Link } from "react-router-dom";

import SideBar from "../../components/SideBar";
import User from "../../components/User";

import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";

import "./style.css";
import axios from "axios";
import { AUTH_API_PATHS } from "../../constants/auth";
import { AUTH_API } from "../../config/api";

const UserList = () => {

  const [info, setInfo] = useState({
    users: [],
    isLoading: true,
  })
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(currentPage);

  useEffect(() => {
    const token = localStorage?.getItem('token');
    const getUsers = async () => {
      try {
        const res = await axios.get(`${AUTH_API}users?page=${currentPage}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setLastPage(res.data.pages)
        setInfo({ isLoading: false, users: res.data.users })
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [currentPage])
  const handlePageAction = (action) => {
    if (action === 'next' && currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
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
        <div className="userList">
          <div className="top-title">
            <h3>
              <BsListUl /> USERS LIST
            </h3>
            <div className="control-container">
              <button name="prev" onClick={() => { handlePageAction('prev') }}>prev</button>
              {/* <h3> */}
              {currentPage}
              {/* </h3> */}
              <button name="next" onClick={() => { handlePageAction('next') }}>next</button>
            </div>
          </div>
          {info.isLoading ? (
            <div>"Loading..."</div>
          ) : (
            <table className="users_Table">
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>delete</th>
              </tr>
              {info?.users?.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <button className="delete" >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
export default UserList
