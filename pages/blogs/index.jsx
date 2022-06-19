import React from "react";
import Post from "../../components/Post";
import styles from "../../styles/Blogs.module.css";
import Posts from "../../public/Posts";
import DUMMY_NAMES from "../../public/Names";

export default function Blogs() {

    return <div className={styles.container} >
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
                <Post key={post.id} postData={post} />
            ))}

        </div>
    </div>

}