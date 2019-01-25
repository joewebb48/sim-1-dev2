import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      none: ''
    };
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct(id) {
    console.log(666, 'hit');
    axios.delete(`/api/product/${id}`).then(res => {
      this.props.mount();
    });
  }

  render(props) {
    console.log('props in dashboard:', this.props);
    let newProduct = this.props.inventory.map((val, i) => {
      return (
        <Product
          key={i}
          productInfo={val}
          delete={this.deleteProduct}
          edit={this.props.handleEdit}
        />
      );
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
