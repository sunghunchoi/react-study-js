import React from 'react';
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import InputSample from "./components/InputSample";

function App() {
  const name = 'Hello React'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
      <Wrapper>
        <Hello
            name="react"
            color="red"
            isSpecial = {true}
        />
        <Hello
            color="pink"
          />
        <Hello/>
        <div style={style}>{name}</div>
        <Counter />
        <InputSample />
      </Wrapper>
  );
}

export default App;