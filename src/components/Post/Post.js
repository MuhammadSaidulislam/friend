import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

const Post = (props) => {
    const { id } = props.friend;


    return (
        <div>
            <Card>
                <Card.Header>Total Post: {id}</Card.Header>
                <Card.Body>
                    <Button variant="info"><Link to={`/Post/${id}`}><h3 variant="text-white">See more</h3></Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Post;