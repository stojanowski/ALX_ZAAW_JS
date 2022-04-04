import React, { useState, useEffect } from "react";

// import Chat from "../Chat/Chat";

import { onValue, ref, set } from "@firebase/database";

// eslint-disable-next-line
import database from "../../firebase";

import styles from "./App.module.css";
import ChatDiv from "../ChatDiv/ChatDiv";

function App() {
  const [messT, setMess] = useState([]);
  const [noPerson, setNoPerson] = useState(false);
  const [noMessage, setNoMessage] = useState(false);

  // useEffect(() => {
  //   // nullish operator ?? []
  //   const messTS = JSON.parse(localStorage.getItem("messT")) ?? [];
  //   setMess(messTS);
  // }, []);

  useEffect(() => {
    onValue(ref(database, "/"), (snapshot) => {
      const data = snapshot.val();

      setMess(Object.values(data));
      // console.log(Object.values(data));
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const personI = document.querySelector("#person");
    const messageI = document.querySelector("#message");

    if (personI.value.length === 0) {
      setNoPerson(true);
    } else {
      setNoPerson(false);
    }

    if (messageI.value.length === 0) {
      setNoMessage(true);
    } else {
      setNoMessage(false);
    }

    if (personI.value.length === 0 || messageI.value.length === 0) {
      return;
    }

    // const newMess = [
    //   ...messT,
    //   {
    //     id: uuidv4(),
    //     person: personI.value,
    //     message: messageI.value,
    //   },
    // ];

    const newMesageID = Date.now();
    set(ref(database, `/${newMesageID}`), {
      id: newMesageID,
      person: personI.value,
      message: messageI.value,
    });

    messageI.value = "";
    // localStorage.setItem("messT", JSON.stringify(newMess));
    // setMess(newMess);
  };

  return (
    <div>
      <header>Czateria</header>
      <ChatDiv mess={messT} />
      {/* <Chat mess={messT} /> */}
      <form onSubmit={handleSubmit}>
        <div>
          <div className={styles.divCol2}>
            Person: {noPerson ? <span className={styles.err}>*</span> : null}
            <input className={styles.inp} type="text" id="person" />
          </div>
          <div className={styles.divCol2}>
            Message: {noMessage ? <span className={styles.err}>*</span> : null}
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
