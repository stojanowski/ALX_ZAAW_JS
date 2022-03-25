import React from "react";

import styles from "./ChatMessage.module.css";
// <div className={styles.chatMessageDiv}>
function ChatMessage({ message }) {
  return (
    <div className={styles.chatMessageDiv}>
      <span className={styles.messageTitle}>
        {message.person} {message.messDT}
      </span>
      <p className={styles.chatMessageDiv2}>{message.message}</p>
    </div>
  );
}

export default ChatMessage;
