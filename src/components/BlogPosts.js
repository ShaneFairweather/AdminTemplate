import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogSidePosts from './BlogSidePosts';
import BlogPost from './BlogPost';
import Claire from '../assets/images/avatars/user-17.png';
import Timmy from '../assets/images/avatars/user-14.png';
import Trevor from '../assets/images/avatars/user-11.png';
import Juno from '../assets/images/avatars/user-10.png';
import Nate from '../assets/images/avatars/user-9.png';
import Garden from '../assets/images/garden.jpg';
import Mountains from '../assets/images/mountains.jpg';
import Waves from '../assets/images/waves.jpg';
import blogPosts from '../data/blogPosts';
import sidePosts from '../data/sidePosts';

const BlogPosts = () => {
    const renderBlogPosts = () => {
        return blogPosts.map((post) => {
            return <BlogPost key={post.id} post={post}/>
        })
    };

    return (
        <Container fluid>
            <div className="section-header">Blog</div>
            <Row>
                <Col xs="12" sm="12" md="8">
                    {renderBlogPosts()}
                </Col>
                <Col xs="12" sm="12" md="4">
                    <BlogSidePosts sidePosts={sidePosts} header="Popular posts"/>
                </Col>
            </Row>
        </Container>
    )
};

export default BlogPosts;