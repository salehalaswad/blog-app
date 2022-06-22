import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Post.module.css";
import InteractiveBar from "./InteractiveBar";

const PostCard = ({ postData: { id, author, date, content, likes, comments } }) => {

    const router = useRouter();
    const { query } = router;
    const handleClick = id => {
        router.push("/post/" + id + "?name=" + query.name)
    }

    return <div className={styles.container} onClick={() => handleClick(id)}>
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
        <InteractiveBar likes={likes} commentsCount={comments.length} addLike={() => { }} />

    </div>
}

export default PostCard;