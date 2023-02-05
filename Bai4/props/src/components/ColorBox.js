import React from "react";
import './ColorBox.css'
import PropTypes from 'prop-types';

function ColorBox(props)  {
  const {color} = props;
  return (
    <div className="box" style={{'backgroundColor': color}}></div>
  ) 
}

ColorBox.propTypes  = {
  color: PropTypes.string.isRequired,
}

ColorBox.defaultProps = {
}

export default ColorBox;