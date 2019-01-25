import React, { Component } from 'react';
import DashBoard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        // {
        //   name: 'shirt',
        //   price: '9.99',
        //   img_url: 'shirt_links here'
        // },
        // {
        //   name: 'hat',
        //   price: '19.99',
        //   img_url: 'hat_links here'
        // },
        // {
        //   name: 'socks',
        //   price: '5.99',
        //   img_url: 'sock_links here'
        // }
      ]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // console.log('cdm: hit??');
    axios.get('/api/inventory').then(res => {
      // console.log('Mount in App:', res.data);
      this.setState({
        inventory: res.data
      });
    });
  }
  render() {
    console.log('app-state:', this.state.inventory);
    return (
      <div className='App'>
        <Header />
        <DashBoard inventory={this.state.inventory} />
        <Form mount={this.componentDidMount} />
      </div>
    );
  }
}

export default App;
