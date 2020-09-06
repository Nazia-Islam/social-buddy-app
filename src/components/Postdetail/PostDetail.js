import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import './PostDetail.css';
import Comments from '../Comments/Comments';


const PostDetail = () => {
    // const ppic = fakeData;
    // let [profilePic, setProfilePic] = useState(ppic);
    const {id} =useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, []);

    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(commentUrl)
        .then(res => res.json())
        .then(data =>setComments(data))
    }, [])
    return (
        <div>
            <Header/>
            <Container maxWidth="md">
            <div className="my-post">
                <h3>Title: {post.title}</h3>
                <p>{post.body}</p>
                <p><small>User id: {post.userId}</small></p>
                <p><small>Post id: {post.id}</small></p>
                <hr className="hr"/>
                <p><small>Comments...</small></p>
                <hr className="hr"/>
                {
                    comments.map(comments => <Comments comments={comments}></Comments>)
                }  
            </div>

            </Container>
        </div>

    );
};

export default PostDetail;