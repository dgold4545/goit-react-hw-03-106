import { useState } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ searchItemS, onSearchItem }) {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={searchItemS}
        onChange={(event) => {
          onSearchItem(event.target.value);
        }}
      />
    </div>
  );
}
