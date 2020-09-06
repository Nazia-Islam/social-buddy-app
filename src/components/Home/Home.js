import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const postPageStyle = {
    backgroundColor: '#ffffff',
};

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        
    }, []);

    return (       
        <div style={postPageStyle}>
            <Header/>
            <div className="posts-container">
                <h2 className="shadow-text">what's new about your buddies</h2>
            {
                posts.map(myPost => <Posts myPost={myPost}></Posts>)
            }
            </div>
        </div>
    );
};

export default Home;