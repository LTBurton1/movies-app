import { useState } from "react";

import "./Input.css";

function Input({ updateMovies }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState();

  function updateTitle(e) {
    const title = e.target.value;
    setTitle(title);
  }

  function updateYear(e) {
    const year = Number(e.target.value);
    setYear(year);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    updateMovies(title, year);

    setTitle(" ");
    setYear();

    form.reset();
  }

  return (
    <form className="movie-input" onSubmit={handleSubmit}>
      <input onChange={updateTitle} type="text" />
      <input onChange={updateYear} type="number" max="2050" />
      <button type="submit">Search</button>
    </form>
  );
}

export default Input;
