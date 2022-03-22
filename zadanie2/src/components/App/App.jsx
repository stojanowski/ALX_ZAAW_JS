import React, { useState, useEffect } from "react";
import Chat from "../Chat/Chat";

import styles from "./App.module.css";

// const MESSAGES = [
//   {
//     messDT: "2022.03.21 12:10",
//     person: "Adam",
//     message: "Ala ma kota !",
//   },
//   {
//     messDT: "2022.03.21 13:10",
//     person: "Adam",
//     message: "Kot ma ale !",
//   },
// ];
function App() {
  const [messT, setMess] = useState([]);

  useEffect(() => {
    // nullish operator ?? []
    const messTS = JSON.parse(localStorage.getItem("messT")) ?? [];
    setMess(messTS);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const personI = document.querySelector("#person");
    const messageI = document.querySelector("#message");

    const newMess = [
      ...messT,
      {
        messDT: new Date().toLocaleString(),
        person: personI.value,
        message: messageI.value,
      },
    ];
    personI.value = "";
    messageI.value = "";

    localStorage.setItem("messT", JSON.stringify(newMess));
    setMess(newMess);
  };

  return (
    <div>
      <header>Czateria</header>
      <Chat mess={messT} />
      <form onSubmit={handleSubmit}>
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
