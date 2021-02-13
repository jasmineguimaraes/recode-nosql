import React, { Component } from 'react';
import '../css/App.css';

class CRUD extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/customer');
    const body = await response.json();
    this.setState({ customer: body, isLoading: false });
  }

  render() {
    const {customer, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <h2>Customer Info</h2>
          Firstname: {customer.firstname}<br/>
          Lastname: {customer.lastname}<br/>
          Age: {customer.age}<br/>
          Address: {customer.address}<br/>
          Copyrightby: <a href="{customer.copyright}">{customer.copyright}</a><br/>
      </div>
    );
  }
}

export default CRUD;