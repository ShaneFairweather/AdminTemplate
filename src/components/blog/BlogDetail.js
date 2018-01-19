import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogSidePosts from './BlogSidePosts';
import BlogPost from './BlogPost';
import blogPosts from '../../data/blogPosts';
import sidePosts from '../../data/sidePosts';

const BlogDetail = (props) => {
    const blogId = props.match.params.id;
    const activePost = blogPosts.find(obj => obj.id == blogId);
    const renderActivePost = () => {
        if(activePost) {
            return (
                <Row>
                    <Col xs="12" sm="12" md="8">
                        <BlogPost full key={activePost.id} post={activePost}/>
                    </Col>
                    <Col xs="12" sm="12" md="4">
                        <BlogSidePosts sidePosts={sidePosts} header="Related posts"/>
                    </Col>
                </Row>
            )
        }
    };

    return (
        <Container fluid>
            <div className="section-header">Blog</div>
            {renderActivePost()}
        </Container>
    )
};

export default BlogDetail;