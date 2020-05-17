import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ToDoListComp from './components/ToDoListComp';



function App() {
  return (
   <Fragment>
     <Header/>
     <ToDoListComp/>
   </Fragment>
  );
}

export default App;
