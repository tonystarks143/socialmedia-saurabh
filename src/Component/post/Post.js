import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import authHeader from '../header/auth-header';

const Post = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [post, setPost] = useState(null);
    const [liked, setLiked] = useState(false);
    const authToken = localStorage.getItem('token'); // Retrieve token
    console.log(authToken + "   post api auth header ");
    // useEffect(() => {
    //     //    const response= fetch('http://164.52.212.11/knowledge/api/get', {
    //     //         method: 'GET',
    //     //         headers: {
    //     //           'Authorization': `Bearer ${authToken}`,
    //     //           'Content-Type': 'application/json'
    //     //         },
    //     //         credentials: 'include' // If you need to send cookies or authentication
    //     //       })
    //     //         console.log(response)
    //     //     .then(response => {
    //     //             setPost(response.data);
    //     //             console.log("dATA"+response);
    //     //         })
    //     //         .catch(error => {
    //     //             console.error('Error fetching post:', error);
    //     //         });
    //     fetch('http://164.52.212.11/knowledge/api/get', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include' // If you need to send cookies or authentication
    //     })
    //         .then(response => response.data)
    //         .then(data => {
    //             // Handle the response data
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    useEffect( () => {
        
        fetch('http://164.52.212.11/knowledge/api/get', {
        method: 'GET',
        headers: 
        {
            'Authorization': `${sessionStorage.getItem("token")}`,
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
        })
        .then((data) => {
                console.log("RESPONSE", data.data); 
        })
        .catch(error =>{
            console.log("ERROR: ", error);
        });
    },[])

    return (
        <div className="post">
            {post && (
                <div className="container">
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="details">
                                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>

                                    <span className="name">{post.userId}</span>
                                </Link>
                                <span className="date">1 min ago</span>
                            </div>
                        </div>
                        <MoreHorizIcon />
                    </div>
                    <div className="content">
                        <p>{post.body}</p>
                    </div>
                    <div className="info">
                        <div className="item">
                            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                            12 Likes
                        </div>
                        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                            <TextsmsOutlinedIcon />
                            12 Comments
                        </div>
                        <div className="item">
                            <ShareOutlinedIcon />
                            Share
                        </div>
                    </div>
                    {commentOpen && <Comments />}
                </div>
            )}
        </div>
    );
};

export default Post;
