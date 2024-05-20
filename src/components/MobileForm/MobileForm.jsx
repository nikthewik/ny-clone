import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../../features/query/querySlice";
import { toggleHamburger } from "../../features/toggle/toggleSlice";

import style from "./MobileForm.module.css";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function MobileForm() {
  const isHamburgerOpen = useSelector((state) => state.toggle.isHamburgerOpen);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) return;

    dispatch(updateQuery(search));
    localStorage.setItem("query", e.target.value);

    e.target.value = "";
    e.target.blur();

    dispatch(toggleHamburger(isHamburgerOpen));

    navigate(`/search/${search}`);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div className={style.formContent}>
        <FormInput
          className={style.input}
          placeholder={"SEARCH"}
          value={search}
          onChange={handleChange}
        />
        <FormButton className={style.button}>GO</FormButton>
      </div>
    </form>
  );
}

export default MobileForm;
