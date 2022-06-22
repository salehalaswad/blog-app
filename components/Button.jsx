import React from "react";
import styles from "../styles/Button.module.css";
const Button = ({ title, onClick, className }) => {
    return < button onClick={onClick} className={`${styles.button} ${className}`}>
        {title}
    </button >

}

export default Button;