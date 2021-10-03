
import React, {Component} from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
//import styled,{css} from 'styled-components';
import AppLayout  from './AppLayout';
import AppBar from './AppBar';
class App extends Component {
  render(){

    return (
   
      <AppLayout>
      <AppBar>
   <Welcome name="cryptoDash2"/>
   </AppBar>
   </AppLayout>
    );
  }
  
}

export default App;
