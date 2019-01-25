import React, { Component } from 'react';
import DashBoard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <DashBoard />
        <Form />
      </div>
    );
  }
}

export default App;
