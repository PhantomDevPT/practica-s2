import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from '@emotion/styled';

export const StarIcon = styled(FaStar)`
  cursor: pointer;
  size: 15px;
`;

function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <StarIcon
            key={currentRating}
            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(currentRating)}
          />
        );
      })}
    </div>
  );
}

export default Rating;
