// import React from 'react';
import PropTypes from "prop-types";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={s.input} />
  </label>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
