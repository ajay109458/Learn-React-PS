# Learn-React-PS

## React 
JavaScript library for building user interface. 

## Introduction
React has 3 main design elements 
* Components
  * Like functions in any language. 
  * Reusable and composable
  * Can manage a private state
* Reactive updates
  * React will react. As state change its render DOM again. 
* Virtual views in memory 
  * Write HTML in JavaScript.  
  * Using this approach react is able to create virtual DOM. 
  * Tree reconciliation
  
There are two rendering approaches 
* Enhance HTML to include more tags. Languages like Angular, Vue follow this approach. 
* Write HTML using js. React follow this approach. 

React Components
* Function Component
* Class Component

## React Getting started. 
```
npm install create-create-app -g
```

```
create-react-app helloworld
```

## React Online Editor
https://codesandbox.io/s/y363o03rvz

## React Sample Code
### Function Component
```
import React from 'react';
import { render } from 'react-dom';

const Button = (props) => {
  return (
    <button>{props.label}</button>
  )
}

render(<Button label="Hello"/>, document.getElementById('root'));
```

### Class Component
```
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
```
