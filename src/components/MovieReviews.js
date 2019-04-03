import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short,
  multimedia
}) => {
  return (
    <div className="review"  key={headline}>
      <div className="review-header">
        <h4 className="review-title">
          {headline}
        </h4>
        <span className="review-author">
          {byline}
        </span>
      </div>
      <br />
      <div className="review-body">
      {multimedia !== null ?
        <img className="review-cover" src={multimedia.src} alt={headline} title={headline}/> : null
        }
        <blockquote className="review-summary">
          {summary_short}
        </blockquote>
        <a className="review-link" href={link.url}>
          Click here to read
        </a>
      </div>
      <hr />
    </div>
  )
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
