import React from 'react';

export default function Product(props) {
  console.log('product:', props);
  return (
    <div>
      <h3>Product</h3>
      <div>{props.productInfo.name}</div>
      <div>{props.productInfo.imgurl}</div>
      <div>{props.productInfo.price}</div>
    </div>
  );
}
