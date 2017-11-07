import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {counter: 9};
  }

  render() {
    return (
      <button>{this.state.counter}</button>
    )
  }
}

render(<Button label="Hello"/>, document.getElementById('root'));
