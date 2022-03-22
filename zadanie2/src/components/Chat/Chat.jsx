import React from "react";

import styles from "./Chat.module.css";

function Chat({ mess }) {
  let messagesContent = "";

  if (mess.length === 0) {
    return null;
  }

  mess.forEach((messItem) => {
    messagesContent += `${messItem.person} [${messItem.messDT}] - ${messItem.message} \r\n`;
  });

  return (
    <div>
      <textarea
        readOnly
        type="text"
        id="chatWindow"
        value={messagesContent}
        className={styles.chatWindow}
      />
    </div>
  );
}

export default Chat;
