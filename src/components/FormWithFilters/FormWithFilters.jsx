import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateQuery, updateSort } from "../../features/query/querySlice";

import style from "./FormWithFilters.module.css";
import formatNumber from "../../helpers/formatNumber";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function FormWithFilters({ hits = 0 }) {
  const query = useSelector((state) => state.query.value);
  const sortBy = useSelector((state) => state.query.sort);
  const [search, setSearch] = useState(query);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (query) setSearch(query);
  }, [query]);

  useEffect(() => {
    if (!query) {
      const inputValue = localStorage.getItem("query");
      const inputSort = localStorage.getItem("sort");

      if (inputValue) setSearch(inputValue);
      if (inputSort) dispatch(updateSort(inputSort));
    }
  }, [query, dispatch]);

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

    e.target.blur();

    navigate(`/search/${search}`);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
      handleSubmit(e);
    }
  }

  function handleSort(e) {
    dispatch(updateSort(e.target.value));
    localStorage.setItem("sort", e.target.value);
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.formContainer}>
          <p className={style.infoResults}>
            {`Showing ${formatNumber(hits)}
            results for:`}
          </p>

          <form
            id="search-form"
            className={style.form}
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
          >
            <div className={style.flex}>
              <div className={style.formContent}>
                <FormInput
                  className={style.input}
                  placeholder={"Search"}
                  value={search}
                  onChange={handleChange}
                />
                <FormButton className={style.button}>
                  <svg viewBox="0 0 16 16">
                    <path
                      fill="var(--clr-w4)"
                      d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"
                    ></path>
                  </svg>
                </FormButton>
              </div>

              <div>
                <select
                  className={style.sort}
                  form="search-form"
                  value={sortBy}
                  onChange={handleSort}
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="newest">Sort by Newest</option>
                  <option value="oldest">Sort by Oldest</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormWithFilters;
