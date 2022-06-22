import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import InteractiveBar from "./InteractiveBar";

import styles from "../styles/SinglePost.module.css";
import Button from "./Button";

const SinglePost = ({ postData: { id, author, date, content, likes, comments } }) => {

    const textAreaRef = useRef();

    const router = useRouter();
    const { query } = router;

    const [likesCount, setLikesCount] = useState(likes);
    const [liked, setLiked] = useState(false);
    const [text, setText] = useState("");
    const [stateComments, setStateComments] = useState(comments);

    const handleLikeClick = () => {
        if (!liked) {
            setLikesCount(likesCount + 1)
            setLiked(true);
        } else {
            setLikesCount(likesCount - 1)
            setLiked(false);
        }
    }
    const handleCommentClick = () => {
        const offsetBottom = textAreaRef.current.offsetTop + textAreaRef.current.offsetHeight;
        window.scrollTo({ top: offsetBottom });
    }
    const handleTextChange = e => {
        setText(e.target.value);
    }
    const postComment = () => {
        if (text.trim().length != 0) {
            setStateComments([...stateComments, {
                author: query.name,
                content: text
            }]);
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
        <InteractiveBar likes={likesCount} commentsCount={stateComments.length} addLike={handleLikeClick} showCommentBox={handleCommentClick} />
        <div className={styles.comments}>

            {stateComments.map(comment => (
                <div className={styles.comment} key={comment.id}>
                    <h5>{comment.author}</h5>
                    <h6>{comment.content}</h6>
                </div>
            ))}
            <textarea ref={textAreaRef} type="text" className={styles.input} value={text} onChange={handleTextChange} />
            <div className={styles.button}>
                <Button title="post comment" onClick={postComment} />
            </div>


        </div>
    </div>
}

export default SinglePost;