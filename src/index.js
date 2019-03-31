import React from "react";
import ReactDOM from "react-dom";

import { ContactProvider } from "./contexts";
import { AddContact, ContactList } from "./components";

import "./styles.css";

function App() {
  return (
    <ContactProvider>
      <AddContact />
      <ContactList />
    </ContactProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
