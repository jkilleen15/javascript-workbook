'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

let outsideNewVal = "";
let list = [];
let newList = [];
let url = "";

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
        });
  }

  componentDidMount () {
    outsideNewVal = this.state.id;
    let thisVal = 15197733;
    url = "(`https://hacker-news.firebaseio.com/v0/item/<thisVal>.json?print=pretty`)";
    fetch(url)
    //fetch('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')
    //fetch('https://hacker-news.firebaseio.com/v0/item/' + cat + '.json?print=pretty')
    .then(response2 => response2.json())
    .then(data2 => {
          this.setState({newVal: this.state.id, id: data2.id});
          newList.push(this.state.id);
          console.log(this.state.newVal);
          console.log(this.state.id);
        //  textArray.push(this.state.text);
          //outsideNewVal = outsideNewVal - 1;
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

  render() {
    console.log('should be ' + this.state.id);
    return (
      <div>
      <h1>Address Book / Country Codes</h1>
      {newList}
    </div>
      // Your code here
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
