// import styles from "../EditNoteBar.module.css";
import PropTypes from "prop-types";
import React from "react";


function StyleButton(props) {
    return <div className={props.cn} onClick={props.onClick}>{props.text}</div>;
}

StyleButton.propTypes = {
    curFont: PropTypes.any,
    onClick: PropTypes.func
};

export default StyleButton;