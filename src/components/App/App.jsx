import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import initialValue from "../../initialValue.json";

import css from "./App.module.css";
import { useState } from "react";

export default function App() {
  const [startValues, setStartValue] = useState(initialValue);

  const [searchItem, setSearchItem] = useState("");

  const search = initialValue.filter((elem) =>
    elem.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  console.log(search);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchItemS={searchItem} onSearchItem={setSearchItem} />
      <ContactList initialValues={search} />
    </div>
  );
}
