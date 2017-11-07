import React from 'react';
import { render } from 'react-dom';

const Button = (props) => {
  return (
    <button>{props.label}</button>
  )
}

render(<Button label="Hello"/>, document.getElementById('root'));
