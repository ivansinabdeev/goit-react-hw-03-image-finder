import React, { Component } from "react";

import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

class App extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?q=home&page=1&key=22555284-ed5f3516253fb9f9c4ec5f32e&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((image) => this.setState({ image }));
  }

  render() {
    return (
      <div>
        <h1>Get started!</h1>
        {this.state.image && <p>А вот и картинка!</p>}
        <SearchBar />
      </div>
    );
  }
}

export default App;
