import React, { useState, useEffect } from 'react';

// import Chat from "../Chat/Chat";
import Main from 'components/layouts/main/Main';
import Button from 'components/elements/button/Button';
// import InputGroup from 'components/elements/input-group/InputGroup';
import { observe, save, get } from 'services/firebase';
import styles from './App.module.css';
import ChatDiv from '../../ChatDiv/ChatDiv';

function App() {
  const [messT, setMess] = useState([]);
  const [setPersonInputValue, setPersonInputValue] = useState('');
  const [noPerson, setNoPerson] = useState(false);
  const [noMessage, setNoMessage] = useState(false);

  useEffect(() => {
    // funkcja zaawansowana

    observe('messages/', setMess);

    get('currentUser').then((user) => {
      setPersonInputValue(user.name);
      console.log(user);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const personI = document.querySelector('#person');
    const messageI = document.querySelector('#message');

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

    save('messages/', {
      person: personI.value,
      message: messageI.value,
    });

    messageI.value = '';
  };

  return (
    <Main>
      <div>
        <ChatDiv mess={messT} />
        {/* <Chat mess={messT} /> */}
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles.divCol2}>
              Person: {noPerson ? <span className={styles.err}>*</span> : null}
              <input className={styles.inp} type="text" id="person" />
            </div>
            <div className={styles.divCol2}>
              Message:{' '}
              {noMessage ? <span className={styles.err}>*</span> : null}
              <input className={styles.messageIn} type="text" id="message" />
            </div>
            <div className={styles.divCol2}>
              {/* <InputGroup id="person" type="text" label="Person" />
            <InputGroup id="message" type="text" label="Message" /> */}
              <Button btnType="summit">
                <i>&#8508;</i>Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Main>
  );
}

export default App;
