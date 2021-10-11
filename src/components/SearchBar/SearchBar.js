import React, { Component } from "react";
import propTypes from "prop-types";

import s from "./SearchBar.module.css";

class SearchBar extends Component {
  static propTypes = { onSubmit: propTypes.func };
  render() {
    return (
      <header className={s.Searchbar}>
        <form
          className={s.SearchForm}
          onSubmit={(event) => this.props.onSubmit(event)}
        >
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
