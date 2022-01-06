import React from 'react';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import Header from '../Header/Header';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <FeaturedPost></FeaturedPost>
           <Post></Post>
        </div>
    );
};

export default Home;