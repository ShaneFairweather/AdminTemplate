import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BlogSidePosts from './BlogSidePosts';
import BlogPost from './BlogPost';
import Claire from '../assets/images/avatars/user-17.png';
import Timmy from '../assets/images/avatars/user-14.png';
import Trevor from '../assets/images/avatars/user-11.png';
import Juno from '../assets/images/avatars/user-10.png';
import Garden from '../assets/images/garden.jpg';
import Mountains from '../assets/images/mountains.jpg';
import Waves from '../assets/images/waves.jpg';
import blogPosts from '../data/blogPosts';
import sidePosts from '../data/sidePosts';

const BlogDetail = (props) => {
    const blogId = props.match.params.id;
    console.log(blogId);
    console.log(blogPosts);
    console.log(blogPosts.find(obj => obj.id == blogId));
    const activePost = blogPosts.find(obj => obj.id == blogId);
    // console.log(activePost);
    // console.log(activePost);
    // // const renderBlogPosts = () => {
    // //     // return blogPosts.map((post) => {
    // //     return <BlogPost key={activePost.id} post={post}/>
    // //     // })
    // // };
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