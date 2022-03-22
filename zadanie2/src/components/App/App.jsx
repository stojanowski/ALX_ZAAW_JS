import React, { useState } from "react";
import Chat from "../Chat/Chat";

import styles from "./App.module.css";

const MESSAGES = [
  {
    messDT: "2022.03.21 12:10",
    person: "Adam",
    message: "Ala ma kota !",
  },
  {
    messDT: "2022.03.21 13:10",
    person: "Adam",
    message: "Kot ma ale !",
  },
];
function App() {
  const [messT, setMess] = useState(MESSAGES);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMess = [
      ...messT,
      {
        messDT: "2022.03.21 15:10",
        person: "Adam",
        message: "asdasdasdasd! aaaaa!",
      },
    ];

    setMess(newMess);
  };

  return (
    <div>
      <header>Czateria</header>
      <Chat mess={messT} />
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div className={styles.divCol2}>
            Person:
            <input className={styles.inp} type="text" id="person" />
          </div>
          <div className={styles.divCol2}>
            Message:
            <input className={styles.messageIn} type="text" id="message" />
          </div>
          <div className={styles.divCol2}>
            <input className={styles.inp} type="submit" id="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
