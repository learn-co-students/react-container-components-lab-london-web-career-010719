import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XpDcAAcBYAsIbGgukVaDHmb3HlIKu3rf';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="review-search-header">
          <h2 className= "review-search-title">
            Search for Movie Reviews:
          </h2>
        </div>
        <div className="review-search-body">
          <form className="review-search-form" onSubmit={this.handleSubmit}>
            <input
              id="review-search-input"
              type="text"
              style={{ width: 500 }}
              onChange={this.handleChange}/>
            <button type="submit">Search</button>
          </form>
          {this.state.reviews.length > 0 && <h2>Search Results:</h2>}
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  };
}
