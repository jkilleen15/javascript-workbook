'use strict';

import React, { Component } from 'react';
const ReactDOM = require('react-dom');
const styles = require('../style.css');

export default class SearchForm extends Component {

  constructor (props) {
    super(props);
    this.state = {searchText: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearchChange (e) {
    this.setState({
      searchText: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onSearchChange(this.state.searchText);
    // uncomment below to clear input field once search complete
    // e.target.reset();
  }

  render () {
    return (
      <form className='search-form' onSubmit={this.handleSubmit} >
        <label htmlFor='search' className='is-hidden'> Enter keyword(s) below >> </label>
        <input type='search'
          onChange={this.onSearchChange.bind(this)}
          name='search'
          ref={(input) => this.query = input}
          title='enter a keyword i.e. "india"'
          placeholder='type keyword here...' />
        <button type='submit' id='search' className='search-button'><i>GO!</i></button>
      </form>
    );
  }
}
