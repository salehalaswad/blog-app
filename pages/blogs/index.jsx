import React from "react";
import PostCard from "../../components/PostCard";
import styles from "../../styles/Blogs.module.css";
import Posts from "../../public/Posts";
import DUMMY_NAMES from "../../public/Names";

import Header from '../../components/Header';

export default function Blogs() {

    return <div className={styles.container} >
        <Header />
        <div className={styles.sidebar}>
            <h4>Members:</h4>
            <ul>
                {DUMMY_NAMES.map(name => (

                    <li key={name}>
                        <h5>{name}</h5>
                    </li>

                ))}
            </ul>
        </div>
        <div className={styles.posts}>
            {Posts.map(post => (
                <PostCard key={post.id} postData={post} />
            ))}

        </div>
    </div>

}