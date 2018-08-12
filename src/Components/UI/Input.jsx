import React from 'react';


export default ({
  elementType, elementConfig, changed, value, label,
}) => {
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select value={value} onChange={changed}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }
  return (
    <div>
      <label>
        {label}
      </label>
      {inputElement}
    </div>
  );
};
