'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

let topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
let news_items = [];

const story = '';

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchLink: '',
      storyURL: '',
      storyTitle: '',
      storyBy: ''

    };
  }

//  getNews: function() {
//getNews () {
componentDidMount() {
      //var TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
      //var news_items = [];

      //AsyncStorage.setItem('time', JSON.stringify({'last_cache': moment()}));

      //api(TOP_STORIES_URL).then(
      fetch(topStoriesURL)
      .then(response => response.json())
      .then((top_stories) => {

              for(var x = 0; x <= 10; x++){

                  var story_url = "https://hacker-news.firebaseio.com/v0/item/" + top_stories[x] + ".json";

                  //api(story_url).then(
                  fetch(story_url)
                  .then(response2 => response2.json())
                  .then(
                      (story) => {
                          this.setState({
                            fetchLink: story_url,
                            storyURL: story.url,
                            storyTitle: story.title,
                            storyBy: story.by});
                          news_items.push(
                            [this.state.fetchLink,
                             this.state.storyURL,
                             this.state.storyTitle,
                             this.state.storyBy]
                           );
                          console.log(news_items);
                          //this.updateNewsItemsUI(news_items);
                          //this.updateNewsItemDB(news_items);

                      }
                  );

              }
          }
      );

  }

  render() {
    return (
      <div>
      <h1>Address Book / Country Codes</h1>
      <ul>
             <li className='story-wrap'>
               <h3>{news_items[0][2]}</h3>
               <h3>{news_items[0][3]}</h3>
               <h3><a src={news_items[0][1]} /></h3>
               <br /><br />
             </li>
      </ul>
    </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
