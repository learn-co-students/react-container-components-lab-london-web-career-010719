import React from 'react'
import { Card } from 'semantic-ui-react'

const MovieReviews = props => (
  <div className='review-list'>
    {props.reviews.map(review => (
      <Card key={review.display_title}>
        <Card.Content>
          <Card.Header>{review.display_title}</Card.Header>
          <Card.Meta>
            <span className='date'>Published {review.publication_date}</span>
          </Card.Meta>
          <Card.Description>{review.summary_short}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={review.link.url}>{review.link.suggested_link_text}</a>
        </Card.Content>
      </Card>
    ))}
  </div>
)

export default MovieReviews
