import React from "react";
import { ContactContext } from "../contexts";

export const ContactList = props => {
  let { contacts } = React.useContext(ContactContext);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li>{JSON.stringify(contact)}</li>
        ))}
      </ul>
    </div>
  );
};
