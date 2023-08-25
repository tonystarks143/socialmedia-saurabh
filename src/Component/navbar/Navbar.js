import React from 'react'
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import "./navbar.scss"
import { useNavigate } from 'react-router-dom';

export const logoutUser = () => {
  // Clear user data from local storage
  localStorage.clear();
  sessionStorage.clear();
};
const Navbar = () => {
  const history = useNavigate();
  const handleLogout = () => {
    logoutUser();
    history('/login');
  }


  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>

      </div>

      <div className="right">
        <PersonOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className="user">
          <img

            alt=""
          />
          <span>
            {/* {storedUsername} */}
          </span>

          <Button variant="contained" color="primary" onClick={handleLogout} >
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar