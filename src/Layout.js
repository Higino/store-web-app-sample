import React, { Component } from 'react';
import './Layout.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing'

class Layout extends Component {
  render() {
    var headerTitle = "Products Browse";

    return (
      <div className="App">
        <Header title= {headerTitle}/>
        <ProductListing />
      </div>
    );
  }
}

export default Layout;
