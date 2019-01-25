import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  render(props) {
    console.log('props in dashb:', this.props);
    let newProduct = this.props.inventory.map((val, i) => {
      return <Product key={i} productInfo={val} />;
    });
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <Product /> */}

        {newProduct}
      </div>
    );
  }
}
