import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuery } from "../../features/query/querySlice";

import style from "./DesktopForm.module.css";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function DesktopForm() {
  const [isVisible, setIsVisible] = useState(false);
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

    setIsVisible(!isVisible);

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
    <div className={style.formContainer}>
      <div
        className={style.searchIcon}
        onClick={() => setIsVisible(!isVisible)}
      >
        <svg viewBox="0 0 16 16">
          <path
            fill="var(--clr-b1)"
            d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"
          ></path>
        </svg>
      </div>

      {isVisible && (
        <form
          className={style.form}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <FormInput
            className={style.input}
            placeholder={"SEARCH"}
            onChange={handleChange}
          />
          <FormButton className={style.button}>GO</FormButton>
        </form>
      )}
    </div>
  );
}

export default DesktopForm;
