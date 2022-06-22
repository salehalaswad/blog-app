import React from "react";

import Button from "./Button";
import styles from "../styles/Post.module.css";
const InteractiveBar = ({ likes, commentsCount, addLike, showCommentBox }) => {
    const handleLikeClick = () => addLike();
    const handleCommentClick = () => showCommentBox();
    return <div className={styles["interactive-bar"]}>
        <Button title="LIKE" onClick={handleLikeClick} />
        <p>{likes} likes</p>
        <Button title="COMMENT" onClick={handleCommentClick} />
        <p>{commentsCount} comments</p>
    </div>
}

export default InteractiveBar;