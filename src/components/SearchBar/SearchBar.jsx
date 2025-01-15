import clsx from "clsx";
import s from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearchChanged }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChanged(value.trim());
    setValue("");
  };
  return (
    <header className={clsx(s.headerSearchBar)}>
      <form className={clsx(s.formSearchBar)} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className={clsx(s.inputSearchBar)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={clsx(s.btnSearchBar)} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
