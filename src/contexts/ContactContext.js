import React from "react";

export const ContactContext = React.createContext({
  contacts: [],
  addContact: () => null
});

export class _ContactProvider extends React.Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
    this.state = {
      contacts: []
    };
  }

  addContact = contact => {
    let _contacts = this.state.contacts;
    _contacts.push(contact);
    this.setState({ contacts: _contacts });
  };

  render() {
    let { contacts } = this.state;

    return (
      <ContactContext.Provider
        value={{ contacts, addContact: this.addContact }}
      >
        {this.props.children}
      </ContactContext.Provider>
    );
  }
}

export const ContactProvider = props => {
  let [contacts, updateContacts] = React.useState({ contacts: [] });

  let addContact = contact => {
    let _contacts = contacts.contacts;
    _contacts.push(contact);
    updateContacts({ contacts: _contacts });
  };

  return (
    <ContactContext.Provider
      value={{ contacts: contacts.contacts, addContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
