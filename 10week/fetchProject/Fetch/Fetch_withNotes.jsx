'use strict';

import React, { Component } from 'react';
const ReactDOM = require('react-dom');
const styles = require('../style.css');
import Search from '../Search/Search.jsx';
const MovieDB = require('moviedb')('92bd2e0acc02c7e9732aa12f3e685a95');

const API_KEY = '92bd2e0acc02c7e9732aa12f3e685a95';

export default class Fetch extends Component {
//class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: '',
      loading: false,
      searchText: ''
    };
      this.performSearch = this.performSearch.bind(this);
  }

  // Initiates fetch from NASA Image and Video Library
componentDidMount () {
    this.performSearch();
    }

/*
};
}

handleClick (e) {
this.setState({
  isSelected: true,
  searchText: e.target.value

 */
//https://api.themoviedb.org/3/discover/movie?api_key=92bd2e0acc02c7e9732aa12f3e685a95
//&with_keywords="alaska"&page=1

//with_keywords

//&sort_by=popularity.desc&include_adult=false

//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>
//&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1


performSearch(query = 'alaska') {
  // Perhaps fetch some data here
    //fetch(`https://api.themoviedb.org/3/search/keyword=alaska?api_key=${API_KEY}`)

  //  fetch(`https://api.themoviedb.org/3/search/queryString(alaska)?api_key=92bd2e0acc02c7e9732aa12f3e685a95`)
    //fetch(`https://api.themoviedb.org/3/keyword/alaska?api_key=${API_KEY}`)
    //fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=love`)
    //fetch(`https://api.themoviedb.org/3/search/movie?api_key=92bd2e0acc02c7e9732aa12f3e685a95&query=alaska`)
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=release_date.asc&query=${query}`)

  //  https://image.tmdb.org/t/p/original/voiRRJ9enVHuHELCCuo2Ivh0Y8Y.jpg

    //fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&include_adult=false&api_key=${API_KEY}`)
    //fetch(`https://api.themoviedb.org/3/search/movie?api_key=92bd2e0acc02c7e9732aa12f3e685a95&query=Jack+Reacher`)

    //fetch(`https://images-api.nasa.gov/search?q=${query}`)
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

  render() {
    console.log(this.state.results);
    let poster= [];
    let title= [];
    let relDate = '';
    let rating = '';
    let plot = [];
    let vote=[];
    let voters=[];
    let listing = [];

    let nameTitle = '';
    let firstAirRelease = '';
    let picURL = '';
    let noPic = 'https://www.bus.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
    let goURL = '';
    let mediaType = '';

    this.state.results.forEach((result, id) => {
      //relDate = result.release_date;
      //rating = result.vote_average;
      //if(result.relDate > 2012 && result.rating >= 8.5) {
      //let string = `${result.overview}`;
      //let substring = "alaska";
      //if (string.includes(substring)) {
    //  if (`${result.vote_average}` > 5){

    //|| 'https://goo.gl/images/oEett5' />
      //if (`${result.media_type}` === 'movie' || `${result.media_type}` === 'tv') {

      //TODO - make this terciary ? Y: NO



      // picURL = `${result.poster_path}` && `https://image.tmdb.org/t/p/original/${result.poster_path}`;
        //let noPic = 'https://goo.gl/images/oEett5';
      //if (`${result.poster_path}`){
      if (`${result.poster_path}` === 'null') {
        picURL = noPic;
        if (`${result.media_type}` === 'movie') {
          nameTitle = `${result.title}`;
          firstAirRelease = `${result.release_date}`;
          mediaType = "Movie";
        } if (`${result.media_type}` === 'tv'){
          nameTitle = `${result.name}`;
          firstAirRelease = `${result.first_air_date}`;
          mediaType = "TV";
        }
      }
      else if (`${result.media_type}` === 'movie') {
        picURL = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
        nameTitle = `${result.title}`;
        firstAirRelease = `${result.release_date}`;
        mediaType = "Movie";
      }
      else if (`${result.media_type}` === 'tv') {
        picURL = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
        nameTitle = `${result.name}`;
        firstAirRelease = `${result.first_air_date}`;
        mediaType = "TV";
      }
      // IF YOU WOULD TO INCLUDE PEOPLE IN SEARCH
        //1. UN-COMMENT ELSE STATEMENT BELOW
        //2. REMOVE MOVIE/TV CONDITIONAL FROM ARRAY PUSH BELOW
    else {
        picURL = noPic;
        nameTitle = `${result.name}`;
        firstAirRelease = 'n/a';
        mediaType = '(Person)';
        }


      let goURL2 = '';
        /*
        if (`${result.media_type}` === 'movie') {
          goURL = `https://www.themoviedb.org/movie/${result.id}`;
        } else if (`${result.media_type}` === 'movie') {
          goURL = `https://www.themoviedb.org/tv/${result.id}`;
        } else {
          goURL = `https://www.themoviedb.org/person/${result.id}`;
        }
        */

      goURL2 = `https://www.themoviedb.org/${result.media_type}/${result.id}`;
      // let movieURL = `https://www.themoviedb.org/movie/${result.id}`;
      //let tvURL = `https://www.themoviedb.org/tv/${result.id}`;
    //  console.log(noPic);
      //if (`${result.media_type}` === 'movie' || 'tv') {
      listing.push(
        <ul key={id}>
        <a href={goURL2} target='_blank'>
          <li>
            <img src= {picURL} />
          </li></a>
        <li><h4>{nameTitle}</h4></li>
        <li>Rating: {result.vote_average || 'n/a'} <i>({result.vote_count || 0} votes)</i></li>
        <br /><li>Overview: {result.overview || 'Click Image to Learn More'}</li><br />
        <li> {mediaType} Release Date: {firstAirRelease || 'n/a'}</li>
      </ul>);
    //  }
    });
    //<li>Number of Ratings: {result.vote_count}</li>
    //<li>Media Type: {result.media_type}</li>

    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'><a href = 'https://www.themoviedb.org/' target='_blank'> The Movie DB </a> - TOP 20 DEEP SEARCH</h1>
            <Search onSearchChange={this.performSearch} />
            <h1 className='main-title' id='lite'>Explore Movie & TV Plots by Keyword</h1>
          </div>
        </div>
        <div className='main-content'>
         {listing}
       </div>
     </div>
    );
  }
 }
ReactDOM.render(<Fetch />, document.getElementById('fetch'));
