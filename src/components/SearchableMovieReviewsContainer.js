import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'U4oI1RWooo5rsSXrscLyOI4oleKxuvqG'
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSearchChangeInput = event =>
    this.setState({ searchTerm: event.target.value })

  handleClick = event => {
    event.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(respObject => this.setState({ reviews: respObject.results }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <Input
          value={this.state.searchTerm}
          onChange={this.handleSearchChangeInput}
          placeholder='Search for a review...'
        />
        <Button onClick={this.handleClick} primary>
          Search
        </Button>
        <MovieReviews reviews={this.state.reviews} />
        <hr />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
