import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class MotionToast extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return (
      <div className={styles.test}>
        Example Component: {text}
        <h1>Ronnie</h1>
      </div>
    );
  }
}
