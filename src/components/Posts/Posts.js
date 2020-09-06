import React from 'react';
import './Posts.css';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    //console.log(props);
    const {userId, id, title, body} = props.myPost;

    return (
        <Container maxWidth="md">
            <div className="my-post">
                <h3>Title: {title}</h3>
                <p>{body}</p>
                <p><small>User id: {userId}</small></p>
                <p><small>Post id: {id}</small></p>
                <Link to={`/posts/${id}`}>
                    <button className="read-more">Read more</button>
                </Link>
            </div>
        </Container>
        
    );
};

export default Posts;