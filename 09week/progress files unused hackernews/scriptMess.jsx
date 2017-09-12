'use strict';

const React = require('react');
//import React from 'react';
const ReactDOM = require('react-dom');
const styles = require('./style.css');
import queryString from 'query-string';

//fetch(`/some/url/path/?${queryString.stringify(params)}`)
let newList = [];
let outsideNewVal = '';
let idArray = [];
let textArray = [];

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      maxItem: '',
      newVal: '',
      id: '',
      author: '',
      text: ''
    };
  }

  componentWillMount() {
    fetch('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')
    .then(response => response.json())
    .then(data => {
          this.setState({maxItem: data, id: data});
          outsideNewVal = this.state.id;
          //this.setState({newVal: outsideNewVal});
          //this.setState({newVal: (this.state.maxItem)});
        });
    console.log(outsideNewVal);

    for (let i = 1; i <= 11; i++) {
  //  this.setState({newVal: this.state.id});
    //outsideNewVal = this.state.id;
    //console.log('first: ' + outsideNewVal);
    //fetch('https://hacker-news.firebaseio.com/v0/item/15197494.json?print=pretty')
    fetch(`https://hacker-news.firebaseio.com/v0/item/${queryString.stringify(outsideNewVal)}.json?print=pretty`)
    //fetch('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')
    //fetch('https://hacker-news.firebaseio.com/v0/item/' + cat + '.json?print=pretty')
    .then(response2 => response2.json())
    .then(data2 => {
          //console.log(this.state.newVal);
          //console.log('second: ' + outsideNewVal);
          this.setState({id: outsideNewVal, text: data2.text});
          newList.push(this.state.id);
          console.log(this.state.text);
        //  textArray.push(this.state.text);
          outsideNewVal = outsideNewVal - 1;
          //outsideNewVal = outsideNewVal - i;
          //newVal += i;
          //console.log(this.state.newVal);
        //  this.state.list.forEach((item, id) => {
            //newList.push(<li key={data.id}>{item}</li>);
            //cat = (cat - 1);
          })
        .catch((error) => {
        console.log('Oops! Error fetching and parsing your data', error);
        });
    }
  }
    render() {
      //console.log(data);
      //console.log(this.state.list);
      //console.log(`max item: ${this.state.maxItem}`);
      //console.log(this.state.newVal);
      console.log('we made it to render');

      //console.log('cat: ' + cat);
    /*  let lis = [];

      this.state.list.forEach((item, id) => {
        lis.push(<li key={id}>{item.title}</li>);*/
      //});

    return (
      <div>
        <h1>Test List</h1>
        <ul>
          {newList.join(' , ')}
          {textArray.join(' , ')}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(<Fetch />, document.getElementById('fetch'));
