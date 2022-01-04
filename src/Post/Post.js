import React from 'react';
import fashion from '../Images/fashion.jpg'
import food from '../Images/food.jpg'
import lifestyle from '../Images/fashion.jpg'
import { Card, Col, Row } from 'react-bootstrap';
import'./Post.css';



const OurPost = [
    {
        id: 1,
        img: fashion,
        name: 'Travel.fashion',
        description: 'Fashion is a form of self-expression and autonomy  '
    },
    {
        id: 2,
        img: food,
        name: 'Travel.food',
        description: 'food, substance consisting essentially of protein '
    },
    {
        id: 3,
        img: lifestyle,
        name: 'Travel.lifestyle',
        description: 'Lifestyle is a way of life established by a society'
    },

];

const Post = () => {
    return (
        <div>
            <h1>featured post</h1>
            <Row xs={1} md={2} lg={3} style={{ margin: "100px", marginTop: "0px",padding:'50px' }}>
                {OurPost.map(post => <Col
                    key={post.id}>

                    <Card  className='card'>
                        <Card.Img variant="top" className='img' src={post.img}  />
                        <h5 className='title' style={{textAlign:"left",marginLeft:"10px", color:"darkred",marginTop:"20px"}}>{post.name}</h5>
                        <h3 className='title' style={{textAlign:"left",marginLeft:"10px"}}>
                            {post.description}
                        </h3>
                        <div style={{display:"flex",margin:"20px"}}>
                            <small className='card-foot'>
                                17 july
                            </small>
                            <small className='card-foot' style={{marginLeft:"20px"}}>
                                .8 MINS READ
                            </small>
                            <small className='card-foot' style={{marginLeft:"20px"}}>
                               .12K VIEWS
                            </small>
                        </div>
                    </Card>


                </Col>)
                }

            </Row>
        </div>
    );
};

export default Post;