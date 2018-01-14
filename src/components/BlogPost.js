import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
    const { title, author, date, text, image, avatar } = props.post;
    // console.log(props.post);
    if(props.full) {
        return (
            <div className="blog-post card">
                <div className="blog-post__image">
                    <img className="img-reponsive" src={image} alt={title}/>
                </div>
                <div className="blog-post__content">
                    <div className="blog-post__info">
                        <div className="blog-post__title">{title}</div>
                        <div className="blog-post__author">
                            by {author} on {date}
                        </div>
                    </div>
                    <div className="blog-post__main">
                        <div className="blog-post__text">{text}</div>
                    </div>
                </div>
                <div className="blog-post__user">
                    <div className="blog-post__avatar">
                        <img src={props.post.avatar} alt={author} />
                    </div>
                    <div className="blog-post__user__author">{author}</div>
                    <div className="blog-post__user__author__info">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.</div>
                    <div className="blog-post__user__icons">
                        <i className="fa fa-facebook" />
                        <i className="fa fa-twitter" />
                        <i className="fa fa-google"/>
                        <i className="fa fa-linkedin"/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="blog-post card">
                <Link to={{
                    pathname: `/blog/${props.post.id}`,
                    state: {
                        post: props.post
                    }
                }}>
                <div className="blog-post__image">
                    <img className="img-reponsive" src={image} alt={title}/>
                </div>
                </Link>
                <div className="blog-post__content">
                    <div className="blog-post__info">
                        <div className="blog-post__title">{title}</div>
                        <div className="blog-post__author">
                            by {author} on {date}
                        </div>
                    </div>
                    <div className="blog-post__main">
                        <div className="blog-post__text">{text}</div>
                        <div className="blog-post__button">
                            {/*<Link to="/blog-detail">Read More...</Link>*/}
                            <Link to={{
                                pathname: `/blog/${props.post.id}`,
                                state: {
                                    post: props.post
                                }
                            }}>Read More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BlogPost;