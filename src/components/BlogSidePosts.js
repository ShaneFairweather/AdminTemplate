import React from 'react';
import BlogSidePost from './BlogSidePost';

const BlogSidePosts = (props) => {
    const renderSidePosts = () => {
        return props.sidePosts.map((post) => {
            return <BlogSidePost key={post.id} post={post} />
        })
    };

    return (
        <div className="blog-side card">
            <div className="card__header blog-side__header">{props.header}</div>
            {renderSidePosts()}
        </div>
    )
};

export default BlogSidePosts;