const Star = ({
  star,
  hover,
  rating,
  handleRating,
  handleHoverIn,
  handleHoverOut,
  color,
}) => {
  return (
    <span
      onClick={() => handleRating(star)}
      onMouseEnter={() => handleHoverIn(star)}
      onMouseLeave={handleHoverOut}
      style={{
        color: star <= (hover || rating) ? color : '#ccc',
      }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
