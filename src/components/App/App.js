import React from 'react';
import './App.css';
import styled from 'styled-components'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from '../../store/reducers';



import TodoListContainer from '../TodoList';
import Input from '../Input';

const Main = styled.div`
  position: absolute;
  width: 1440px;
  height: 768px;
  background: linear-gradient(180deg, #CA94FF 0%, rgba(70, 6, 134, 0.81) 100%);
`;

const List = styled.div`
  position: absolute;
  width: 650px;
  height: 80%;
  left: 50%;
  margin-left: -325px; 
  top: 10%;
  padding: 0px 10px 0px 10px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.67);
  border-radius: 8px;
`;

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Main>
        <List>
          <TodoListContainer />
          <Input />
        </List>
      </Main>
    </Provider>
    
  );
}

export default App;
