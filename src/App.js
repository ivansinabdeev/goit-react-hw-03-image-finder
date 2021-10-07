import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";

import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

class App extends Component {
  state = {
    imageName: null,
    loading: false,
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      "https://pixabay.com/api/?q=home&page=1&key=22555284-ed5f3516253fb9f9c4ec5f32e&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((imageName) => this.setState({ imageName }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <p>Загружаю...</p>}
        {this.state.imageName && <p>{this.state.imageName.total}</p>}
        {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      </div>
    );
  }
}

export default App;
