import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogSidePosts from './BlogSidePosts';
import BlogPost from './BlogPost';
import blogPosts from '../../data/blogPosts';
import sidePosts from '../../data/sidePosts';

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