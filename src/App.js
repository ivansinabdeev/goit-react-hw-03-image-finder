import React, { Component } from "react";
import Loader from "react-loader-spinner";
import * as API from "../src/FetchService/FetchService";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    searchImages: "",
    images: [],
    showModal: false,
    modalImage: "",
    showLoader: false,
    currentPage: 1,
    error: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  pushImagesToState = (response) => {
    const imagesFromResponse = response.data.hits;
    let newSearchArray = [];
    newSearchArray = [...this.state.images, ...imagesFromResponse];
    this.setState(({ images }) => ({ images: newSearchArray }));
  };
  setModalImage = (linkImg) => {
    return this.setState(({ modalImage }) => ({ modalImage: linkImg }));
  };
  openLargeImage = (linkImg) => {
    this.setModalImage(linkImg);
    this.toggleModal();
  };

  loaderToggle = (bool) => {
    return this.setState(({ showLoader }) => ({ showLoader: bool }));
  };
  getImages(words, page) {
    let scrollHeight = 0;
    if (page === 1) {
      scrollHeight = 0;
    } else {
      scrollHeight = document.documentElement.scrollHeight + 144;
    }
    this.loaderToggle(true);
    API.get(words, page).then((response) => {
      this.pushImagesToState(response);
      this.loaderToggle(false);
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));

      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    });
  }

  searchFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchImages: "",
      images: [],
      showModal: false,
      modalImage: "",
      currentPage: 1,
    });
    const searchImagesValue = event.target[1].value;

    this.setState({ searchImages: searchImagesValue });
    const page = 1;
    this.getImages(searchImagesValue, page);
    event.target.reset();
  };

  loadMoreFn = () => {
    this.loaderToggle(true);
    this.getImages(this.state.searchImages, this.state.currentPage);
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal closeFn={this.toggleModal} loader={this.loaderToggle}>
            <img src={this.state.modalImage} alt="modal" />
          </Modal>
        )}
        <SearchBar onSubmit={this.searchFormSubmit} />

        {this.state.searchImages !== "" && (
          <ImageGallery
            loader={this.loaderToggle}
            imagesArray={this.state.images}
            modalFn={this.openLargeImage}
          ></ImageGallery>
        )}
        {this.state.showLoader && <Loader />}
        {this.state.searchImages !== "" && <Button fn={this.loadMoreFn} />}
      </div>
    );
  }
}

export default App;
