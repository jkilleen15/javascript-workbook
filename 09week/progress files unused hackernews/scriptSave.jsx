'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');
let newOne = "";

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      maxItem: ''
    };
  }

  componentWillMount() {
    fetch('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')
    .then(response => response.json())
    .then(data => {
          this.setState({list: data, maxItem: data});
        }).catch((error) => {
        console.log('Oops! Error fetching and parsing your data', error);
        // console.log(this.state.list);
      });
  }

    render() {
      //console.log(data);
      console.log(this.state.list);
      console.log(`max item: ${this.state.maxItem}`);
      console.log(newOne);

      newOne =(this.state.maxItem - 1);
      console.log(newOne);
    /*  let lis = [];

      this.state.list.forEach((item, id) => {
        lis.push(<li key={id}>{item.title}</li>);*/
      //});

    return (
      <div>
        <h1>Test List</h1>
        <ul>
        </ul>
      </div>
    );
  }
}


ReactDOM.render(<Fetch />, document.getElementById('fetch'));
