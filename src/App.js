import React, { Component } from 'react';
import './App.css';
import JSXPractice from './JSXPractice';
import MyFunc from './MyComponentFunc';
import MyComponent from './MyComponent';
import ValidationPractice from './ValidationPractice';
import IterationPractice from './IterationPractice';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App Component 생성자');
  }

  render() {
    return (
      <div>
        <JSXPractice name="ReactJS" age={3} />
        <MyFunc name="리액트 함수형 컴포넌트" />
        <MyComponent />
        <ValidationPractice />
        <hr/>
        <IterationPractice />
      </div>
    );
  }
}

export default App;
