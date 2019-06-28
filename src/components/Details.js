import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Details = ({ match }) => {
    const { postId } = match.params;

    const [post, setPost] = useState(null);

    const getPost = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(res.data);
    }

    useEffect(() => {
        console.log('inside effect');
        getPost();
    }, []);

    return (
        <div>
            { post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ): (<span>Loading...</span>)
            }
            <Link to="/">Go Back</Link>
        </div>
    )
};

export default Details;