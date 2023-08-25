import React, { useContext } from 'react'
import "./home.scss"
import { DarkModeContext } from '../../context/darkModeContext'
import Navbar from '../../Component/navbar/Navbar';
import LeftBar from '../../Component/leftBar/LeftBar';
import { Outlet } from 'react-router-dom';
import RightBar from '../../Component/rightBar/Rightbar';
import Stories from '../../Component/stories/Stories';
import Share from '../../Component/share/Share';
import Post from '../../Component/post/Post';

const Home = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <div style={{ display: "flex" }}>
                <LeftBar />
                <div style={{ flex: 6 }}>
                    <Outlet />
                    <div className='home'>
                        <Stories />
                        <Share />
                        <Post />
                    </div>
                </div>

                <RightBar />
            </div>

        </div>
    )
}

export default Home