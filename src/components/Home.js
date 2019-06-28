import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Home = (props) => {
    console.log(props);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const getPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
    }

    useEffect(() => {
        console.log('inside effect');
        getPosts();

        return () => {
            console.log('component will be unmounted');
        };
    }, []);

    const trList = posts.map((post) => {
        return (
            <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                    <button onClick={() => setSelectedPost(post.id)}>View</button>
                </td>
            </tr>
        )
    });
    return (
        <div>
            {selectedPost ? <Redirect to={`/details/${selectedPost}`} /> : null}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {trList}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPosts: (posts) => {
            dispatch({
                type: 'add_post',
                payload: posts
            });
        }
    };
};

const connectorFn = connect(mapStateToProps, mapDispatchToProps);
const HomeContainer = connectorFn(Home);

export default HomeContainer;