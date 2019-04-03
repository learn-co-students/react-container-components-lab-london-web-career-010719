import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'XpDcAAcBYAsIbGgukVaDHmb3HlIKu3rf';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: []
    };
  };

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ reviews: response.results }));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>
          Latest Movie Reviews:
        </h2>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  };
};
