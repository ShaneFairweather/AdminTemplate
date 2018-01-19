import React from 'react';

const BlogSidePost = ({post}) => {
    const { author, avatar, title, date } = post;
    return (
        <div className="blog-side__post">
            <div className="blog-side__avatar">
                <img src={avatar} alt={author} />
            </div>
            <div className="blog-side__content">
                <div className="blog-side__title">
                    {title}
                </div>
                <div className="blog-side__author">
                    by {author} on {date}
                </div>
            </div>
        </div>
    )
};

export default BlogSidePost;