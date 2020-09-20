import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Friends: {friends.length}</h1>
      {
        friends.map(friend =><Post friend={friend}></Post>)
      }
        </div>
    );
};

export default Home;