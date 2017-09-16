'use strict';

import React, { Component } from 'react';
const ReactDOM = require('react-dom');
const styles = require('../style.css');
import Search from '../Search/Search.jsx';
const MovieDB = require('moviedb')('92bd2e0acc02c7e9732aa12f3e685a95');

const API_KEY = '92bd2e0acc02c7e9732aa12f3e685a95';

export default class Fetch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      results: [],
      query: '',
      loading: false,
      searchText: ''
    };
    this.performSearch = this.performSearch.bind(this);
  }

  // Initiates fetch from The Movie DB API
  componentDidMount () {
    this.performSearch();
  }

  performSearch (query = 'alaska') {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data.results,
          loading: false
        });
      })
      .catch((error) => {
        console.log('Oops! Error fetching and parsing your data', error);
      });
  }

  render () {
    // console.log(this.state.results);
    let listing = [];
    let nameTitle = '';
    let firstAirRelease = '';
    let picURL = '';
    let noPic = 'https://www.bus.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
    let mediaType = '';

    this.state.results.forEach((result, id) => {
      if (`${result.poster_path}` === 'null') {
        picURL = noPic;
        if (`${result.media_type}` === 'movie') {
          nameTitle = `${result.title}`;
          firstAirRelease = `${result.release_date}`;
          mediaType = 'Movie';
        } if (`${result.media_type}` === 'tv') {
          nameTitle = `${result.name}`;
          firstAirRelease = `${result.first_air_date}`;
          mediaType = 'TV';
        }
      } else if (`${result.media_type}` === 'movie') {
        picURL = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
        nameTitle = `${result.title}`;
        firstAirRelease = `${result.release_date}`;
        mediaType = 'Movie';
      } else if (`${result.media_type}` === 'tv') {
        picURL = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
        nameTitle = `${result.name}`;
        firstAirRelease = `${result.first_air_date}`;
        mediaType = 'TV';
      } else {
        picURL = noPic;
        nameTitle = `${result.name}`;
        firstAirRelease = 'n/a';
        mediaType = '(Person)';
      }

      let goURL2 = '';

      goURL2 = `https://www.themoviedb.org/${result.media_type}/${result.id}`;

      listing.push(
        <ul key={id}>
          <a href={goURL2} target='_blank'>
            <li>
              <img src={picURL} />
            </li></a>
          <li><h4>{nameTitle}</h4></li>
          <li>Rating: {result.vote_average || 'n/a'} <i>({result.vote_count || 0} votes)</i></li>
          <br /><li>Overview: {result.overview || 'Click Image to Learn More'}</li><br />
          <li> {mediaType} Release Date: {firstAirRelease || 'n/a'}</li>
        </ul>);
    });

    if (listing.length < 1) {
    return (
      <div>
      <div className='main-header'>
        <div className='inner'>
          <h1 className='main-title'><a href='https://www.themoviedb.org/' target='_blank'> The Movie DB </a> - TOP 20 DEEP SEARCH</h1>
          <Search onSearchChange={this.performSearch} />
          <h1 className='main-title' id='lite'>Explore Movies, TV & People Beyond Titles</h1>
        </div>
      </div>
      <div className='main-content'>
      <div className='no-results'>
        <br />
        <h3>Hmmm...</h3>
        <br />
        <h3>We couldn't find any movies, tv shows or people that matched your search.</h3>
        <br />
        <h3>Let's try again!</h3>
      </div>
    </div>
  </div>
    );

  // else return image results
  } else {

    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'><a href='https://www.themoviedb.org/' target='_blank'> The Movie DB </a> - TOP 20 DEEP SEARCH</h1>
            <Search onSearchChange={this.performSearch} />
            <h1 className='main-title' id='lite'>Explore Movies, TV & People Beyond Titles</h1>
          </div>
        </div>
        <div className='main-content'>
          {listing}
        </div>
      </div>
    );
  }
 }
 }
ReactDOM.render(<Fetch />, document.getElementById('fetch'));
