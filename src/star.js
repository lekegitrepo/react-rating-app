import React from 'react';
import PropTypes from 'prop-types';

const Star = ({select = false, onClick = f => f }) =>
  <div className = {(select) ? "star selected" : "star"} onClick= {onClick}>
  </div>

Star.propTypes = {
  select: PropTypes.bool,
  onClick: PropTypes.func
}

export default Star;
