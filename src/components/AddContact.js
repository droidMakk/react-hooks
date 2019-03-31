import React from "react";

import { ContactContext } from "../contexts";

export const AddContact = props => {
  let [contact, setContact] = React.useState({ name: "", number: "" });
  let { addContact } = React.useContext(ContactContext);

  return (
    <div>
      <input
        placeholder="Your Name"
        onChange={e => setContact({ ...contact, name: e.target.value })}
      />
      <br />
      <br />
      <input
        placeholder="Your Number"
        onChange={e => setContact({ ...contact, number: e.target.value })}
      />
      <br />
      <br />
      <button onClick={_ => addContact(contact)}>Add Contact</button>
    </div>
  );
};
