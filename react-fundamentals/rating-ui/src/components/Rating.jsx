import { useState } from 'react';
import Star from './Star';
import Button from './Button';

const Rating = ({ heading, starColor = 'gold' }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

  const submitRating = () => {
    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
  };

  return (
    <div className='rating-container'>
      <h2>{heading}</h2>
      <div className='stars'>
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            hover={hover}
            rating={rating}
            handleRating={setRating}
            handleHoverIn={setHover}
            handleHoverOut={() => setHover(0)}
            color={starColor}
          />
        ))}
      </div>
      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}

      <Button
        className='submit-btn'
        onClick={submitRating}
        disabled={rating === 0}
      >
        Submit
      </Button>

      {submitted && (
        <div style={{ paddingTop: '20px' }}>
          <hr />
          <p style={{ paddingTop: '10px' }}>You've submitted {rating} rating</p>
          <Button onClick={closeModal} className='model-close-btn'>
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default Rating;
