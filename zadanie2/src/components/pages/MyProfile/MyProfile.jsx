import Main from 'components/layouts/main/Main';
import React, { useState } from 'react';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';
import { update } from 'services/firebase';

function MyProfile() {
  const [name, setName] = useState('');
  // const [isError, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (personInputValue.length === 0) {
    // }
    // console.log(personInputValue);
    update('currentUser/', {
      name,
    });
    setName('');
  };

  const handlePersonChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="person"
          type="text"
          label="Name"
          handleChange={handlePersonChange}
          inputValue={name}
        />
        <Button btnType="submit">Zapisz</Button>
      </form>
    </Main>
  );
}

export default MyProfile;
