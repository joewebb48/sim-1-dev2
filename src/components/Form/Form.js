import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgurl: '',
      name: '',
      price: '',
      input: ''
    };
    this.handleImg = this.handleImg.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleImg(val) {
    this.setState({
      imgurl: val
    });
  }
  handleName(val) {
    this.setState({
      name: val
    });
  }
  handlePrice(val) {
    this.setState({
      price: val
    });
  }
  handleInput(val) {
    this.setState({
      input: val
    });
  }
  handleCancel() {
    this.setState({
      imgurl: '',
      name: '',
      price: '',
      input: '',
      selectedID: null,
      editting: false
    });
  }
  handleAdd() {
    console.log('add hit:');
    const { imgurl, name, price } = this.state;
    axios.post('/api/product', { imgurl, name, price }).then(res => {
      console.log(res.data);
    });
    this.handleCancel();
  }

  editProduct() {
    const { imgurl, name, price, selectedID } = this.state;
    axios
      .put(`/api/product/${selectedID}`, { imgurl, name, price })
      .then(res => {
        this.props.mount();
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedProduct === prevProps) {
      console.log(774444, this.props.selectedProduct);
      console.log(77884444, prevProps);
      console.log('nice');
    } else {
      console.log('so not equal');
      console.log(77, this.props.selectedProduct);
      console.log(7788, prevProps);
      // this.setState({
      //   imgurl: '',
      //   name: '',
      //   price: ''
      // });
    }
  }

  render() {
    console.log('Form props:', this.props);
    console.log(' Form state:', this.state);
    return (
      <div className='main_form_wrapper'>
        {/* {this.props.mount()} */}
        <h1>Form</h1>
        <div>
          {/* {console.log('props mount', this.props.mount)} */}
          <div>{this.props.mount}</div>
        </div>
        <div className='img_form_div'>
          <img />
        </div>
        <div>
          <input
            placeholder='img'
            value={this.state.imgurl}
            className='form_input'
            onChange={e => {
              this.handleImg(e.target.value);
            }}
          />
          <input
            placeholder='name'
            value={this.state.name}
            className='form_input'
            onChange={e => {
              this.handleName(e.target.value);
            }}
          />
          <input
            placeholder='price'
            value={this.state.price}
            className='form_input'
            onChange={e => {
              this.handlePrice(e.target.value);
            }}
          />
        </div>
        <div className='form_buttons'>
          <button onClick={this.handleCancel}>Cancel</button>
          <button onClick={this.handleAdd}>Add to inventory</button>
        </div>
      </div>
    );
  }
}
