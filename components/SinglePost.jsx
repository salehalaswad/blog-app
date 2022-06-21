import React, { useState } from "react";
import InteractiveBar from "./InteractiveBar";

import styles from "../styles/SinglePost.module.css";

const SinglePost = ({ postData: { id, author, date, content, likes, comments } }) => {
    const [likesCount, setLikesCount] = useState(likes);
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        if (!liked) {
            setLikesCount(likesCount + 1)
            setLiked(true);
        } else {
            setLikesCount(likesCount - 1)
            setLiked(false);
        }
    }
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
        <InteractiveBar likes={likesCount} commentsCount={comments.length} addLike={handleLikeClick} />
        <div className={styles.comments}>
            <textarea type="text" className={styles.input} />
            {comments.map(comment => (
                <div className={styles.comment} key={comment.content}>
                    <h5>{comment.author}</h5>
                    <h6>{comment.content}</h6>
                </div>
            ))}
        </div>
    </div>
}

export default SinglePost;