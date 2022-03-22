import React from "react";

import styles from "./Chat.module.css";
// {mess[0].message}
function Chat({ mess }) {
  let messagesContent = "";
  console.log(mess);
  if (mess.length === 0) {
    return null;
  }

  mess.map((messItem) => {
    messagesContent += `${messItem.person} [${messItem.messDT}] - ${messItem.message} \r\n`;
  });

  return (
    <div>
      <textarea type="text" id="chatWindow" className={styles.chatWindow}>
        {messagesContent}
      </textarea>
    </div>
  );
}

export default Chat;
