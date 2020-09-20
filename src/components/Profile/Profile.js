import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const [friendTwo, setFriendTwo] = useState({});
    const [friendThree, setFriendThree] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${friendId}`;
        axios(url)
        .then(data => setFriend(data.data));
    }, [friendId])


    useEffect(() =>{
        const urlTwo = `https://jsonplaceholder.typicode.com/posts?userId=${friendId}`;
        axios(urlTwo)
        .then(dataTwo =>{

            setFriendTwo(dataTwo.data)
        } );
        
    }, [friendId])

    
    useEffect(() =>{
        const urlThree = `https://jsonplaceholder.typicode.com/photos/${friendId}`;
        axios(urlThree)
        .then(urlThree =>{
            setFriendThree(urlThree.data)
        } );
        
    }, [friendId])
    return (
        <div>
            <h3>{friend.id}</h3>
            <h4>Title: {friend.title}</h4>
        <h5>Body: {friend.body}</h5>
        <h5>Comment: {friendTwo.body}</h5>
        <picture>
        <source srcSet={friendThree.url} />
        <img src={friendThree.url} alt={friendThree.alt} />
      </picture>
        </div>
    );
};

export default Profile;