'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

let topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
let newItems = [];

// Maps individual story items from stories array

const StoryList = props => {
  const results = props.data;
  let stories = results.map(story =>
    <StoryItem
      title={story[1]}
      by={story[2]}
      url={story[3]}
      key={story[4]} />
  );

  return (
    <ol className='story-list'>
      {stories}
    </ol>
  );
};

// Generates custom list items from StoryList data points

const StoryItem = props => (
  <li className='story-item'>
    <h4>{props.title}</h4>
    <h4><i>by: {props.by}</i></h4>
    <h4>Visit Page: <a href={props.url} target='_blank'>{props.url}</a></h4>
  </li>
);

// Primary component rendered to DOM

class Fetch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      story: '',
      stories: [],
      fetchLink: '',
      storyURL: '',
      storyTitle: '',
      storyBy: '',
      storyId: '',
    };
  }

  // Initiates inital fetch of top stories from hacker news_items
  // Iterates thru the first ten items to access item details

  componentDidMount () {
    fetch(topStoriesURL)
      .then(response => response.json())
      .then((topStories) => {
        for (var x = 0; x < 10; x++) {
          var story_url = "https://hacker-news.firebaseio.com/v0/item/" + topStories[x] + ".json";

          fetch(story_url)
            .then(response2 => response2.json())
            .then((story) => {
              this.setState({
                story: story,
                fetchLink: story_url,
                storyURL: story.url,
                storyTitle: story.title,
                storyBy: story.by,
                storyId: story.id
              });
              // adds detail to newItems array
              newItems.push(
                [
                  this.state.fetchLink,
                  this.state.storyTitle,
                  this.state.storyBy,
                  this.state.storyURL,
                  this.state.storyId
                  ]
                );
              // adds newItems array to stories array (state) as group
              this.setState({stories: newItems});
             }
           );
        }
      }
    );
  }

  // Structure for list items

  render () {
    console.log(this.state.stories);
    return (
      <div className='main-content'>
        <h1>Hacker News - Top 10 Stories!</h1><br />
        <StoryList data={this.state.stories} />
      </div>
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
