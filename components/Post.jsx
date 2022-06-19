import React from "react";
import Button from "../components/Button";

import styles from "../styles/Post.module.css";

const Post = ({ postData: { id, author, date, content, likes, commentsCount } }) => {
    return <div className={styles.container}>
        <div className={styles.head}>
            <div className={styles.author}>
                <h4>{author}</h4>
            </div>
            <div className={styles.date}>{date}</div>
        </div>

        <div className={styles.content}>
            <img className={styles.image} src="https://images.unsplash.com/photo-1655574685452-8fab420130ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="post image" />

            <p>{content}</p>
        </div>
        <div className={styles["interactive-bar"]}>
            <Button title="LIKE" />
            <p>{likes} likes</p>
            <Button title="COMMENT" />
            <p>{commentsCount} comments</p>
        </div>
    </div>
}

export default Post;