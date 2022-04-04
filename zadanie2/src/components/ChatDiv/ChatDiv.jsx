import React, { useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import styles from "./ChatDiv.module.css";

function ChatDiv({ mess }) {
  if (mess.length === 0) {
    return null;
  }

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mess]);

  return (
    <div className={styles.chatMainDiv}>
      {mess.map((messItem) => (
        <>
          <br />
          <ChatMessage key={messItem.id} message={messItem} />
        </>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatDiv;
