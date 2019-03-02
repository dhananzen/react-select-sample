import React, { Component } from "react";

import AsyncSelect from "react-select/lib/Async";
const locations = [
  { "label": "Netherlands", "value": "NL" },
  { "label": "France", "value": "FR" },
  { "label": "Fiji", "value": "FJ" },
  { "label": "Russia", "value": "RU" },
  { "label": "Bolivia", "value": "BO" },
  { "label": "Poland", "value": "PL" },
  { "label": "United States", "value": "US" },
  { "label": "Finland", "value": "FI" },
  { "label": "China", "value": "CN" },
  { "label": "Switzerland", "value": "CH" },
  { "label": "Brazil", "value": "BR" },
  { "label": "Belarus", "value": "BY" },
  { "label": "Thailand", "value": "TH" },
  { "label": "Czech Republic", "value": "CZ" }
]

const filterColors = (inputValue) => {
  return locations.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default class TypeAheadSelect extends Component {
  state = { inputValue: "", showMenu: false };

  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, ""),
      showMenu = newValue.length >= 2;
    this.setState({ inputValue, showMenu });
    return inputValue;
  };

  handleLoadOptions = (query, b) => {
    if (query.length >= 2)
      return loadOptions(query, b)
  }

  render() {
    return (
      <div className="typeahead-input">
        <AsyncSelect
          loadOptions={this.handleLoadOptions}
          menuIsOpen={this.state.showMenu}
          onInputChange={this.handleInputChange}
          classNamePrefix="select"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
