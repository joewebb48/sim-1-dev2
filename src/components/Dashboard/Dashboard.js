import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      none: ''
    };
  }
  deleteProduct(id) {
    axios.delete(`/api/inventory/${id}`).then(res => {
      console.log('hi');
    });
  }

  render(props) {
    console.log('props in dashb:', this.props);
    let newProduct = this.props.inventory.map((val, i) => {
      return <Product key={i} productInfo={val} />;
    });
    return (
      <div>
        {/* <h1>Dashboard</h1> */}
        {/* <Product /> */}

        {newProduct}
      </div>
    );
  }
}
