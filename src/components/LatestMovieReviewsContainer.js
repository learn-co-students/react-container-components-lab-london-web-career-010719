import React, { Component } from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'U4oI1RWooo5rsSXrscLyOI4oleKxuvqG'
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
  `api-key=${NYT_API_KEY}`

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => {
        if (resp.status >= 400) throw new Error('Bad response from server')
        return resp.json()
      })
      .then(respObject => this.setState({ reviews: respObject.results }))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
