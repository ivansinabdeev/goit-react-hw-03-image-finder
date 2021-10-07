import { Component } from "react";
// import { toast } from "react-toastify";

import s from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (event) => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.imageName.trim() === "") {
      return alert("Пустое поле, найдите себе картинку! :) ");
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
