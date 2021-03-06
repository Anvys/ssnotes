import PropTypes from "prop-types";
import React from "react";


function StyleButton(props) {
    return <div title={props.titleHint} className={props.cn} onClick={props.onClick}>{props.text}</div>;
}

StyleButton.propTypes = {
    curFont: PropTypes.any,
    onClick: PropTypes.func,
    titleHint: PropTypes.string
};

export default StyleButton;