import React, { Component } from "react";
import propTypes from "prop-types";

import s from "./Button.module.css";

class Button extends Component {
  static propTypes = { onLoadMore: propTypes.func };

  render() {
    return (
      <button
        className={s.Button}
        type="button"
        onClick={() => this.props.onLoadMore()}
      >
        Load more
      </button>
    );
  }
}

export default Button;
