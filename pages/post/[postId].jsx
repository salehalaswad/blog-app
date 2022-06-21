import React from "react";
import Header from "../../components/Header";
import SinglePost from "../../components/SinglePost";

import DUMMY_POSTS from "../../public/Posts";

const Post = ({ post }) => {

    return <div>
        <Header />
        <SinglePost postData={post} />
    </div>
}

export async function getStaticPaths() {
    const paths = DUMMY_POSTS.map(post => ({ params: { postId: post.id + "" } }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const id = parseInt(params.postId) - 1;
    const post = DUMMY_POSTS[id];
    return {
        props: {
            post: post
        }
    }
}

export default Post;