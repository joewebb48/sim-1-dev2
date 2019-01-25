import React from 'react';
import './Product.css';

export default function Product(props) {
  console.log('product:', props);
  return (
    <div className='product_box'>
      {/* <h3>Product</h3> */}
      <div className='product_img_row'>
        {/* in a row with the name price and buttons */}
        <div>{props.productInfo.imgurl}</div>
      </div>
      <div classname='col_name_price_buttons'>
        <div className='product_name_wrapper'>
          <div>{props.productInfo.name}</div>
        </div>
        <div className='product_price_wrapper'>
          <div>{props.productInfo.price}</div>
        </div>
        <div className='edit_delete_button_row'>
          <div className='delete_wrapper'>
            <button>Delete</button>
          </div>
          <div className='edit_wrapper'>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
