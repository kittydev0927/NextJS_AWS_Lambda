import React, { useState } from 'react';

import { Thumb as ThumbIcon } from '#components/layouts/atoms/Thumb/Thumb';
import { theme } from '#styles/styles';

import {
  StyledButton,
  StyledButtonGroup,
  StyledEmail,
  StyledHelpfulRating,
  StyledRatingCon,
  StyledTypography,
} from './HelpfulRating.styles';

export const HelpfulRating: React.FC = () => {
  const [rating, setRating] = useState([
    { checked: false, label: 'yes' },
    { checked: false, label: 'no' },
  ]);

  return (
    <StyledHelpfulRating>
      <div>
        {rating[1].checked && (
          <div>
            <StyledTypography>For help please contact</StyledTypography>
            <StyledEmail underline="always" href="mailto:CustomerCare@RentProgress.com">
              CustomerCare@RentProgress.com
            </StyledEmail>
          </div>
        )}
      </div>
      <StyledRatingCon>
        <StyledTypography>Was this helpful?</StyledTypography>
        <StyledButtonGroup>
          {rating.map(item => {
            const boundRating = () => setRating(rating.map(r => ({ ...r, checked: r.label === item.label })));

            return (
              <StyledButton
                key={item.label}
                className={`rating-${item.label}`}
                onClick={boundRating}
                aria-label={item.label === 'yes' ? 'This was helpful' : 'This was not helpful'}
              >
                <ThumbIcon
                  rating={item.label}
                  color={item.checked ? theme.colors.accessibleGreen : theme.colors.graniteGray}
                />
              </StyledButton>
            );
          })}
        </StyledButtonGroup>
      </StyledRatingCon>
    </StyledHelpfulRating>
  );
};
