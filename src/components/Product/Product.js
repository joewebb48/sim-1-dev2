import React from 'react';
import './Product.css';

export default function Product(props) {
  console.log('product props:', props);
  // console.log('finding product id', props.productInfo.product_id);

  // const { id, img, name, price } = props.productInfo;
  // console.log(11, props.product_id);
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
            <button
              onClick={() => {
                props.delete(props.productInfo.product_id);
              }}
            >
              Delete
            </button>
          </div>
          <div className='edit_wrapper'>
            <button
              onClick={() => {
                this.props.handleEdit(props.productInfo.product_id);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
