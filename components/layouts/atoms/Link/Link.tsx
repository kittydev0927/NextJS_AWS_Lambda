import React from 'react';

import { Arrow } from '../Arrow/Arrow';
import { StyledArrowIcons, StyledDiv, StyledMUILink } from './Link.style';
import type { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({
  href,
  underline = 'none',
  variant = 'body1',
  children,
  color = 'primary',
  showArrow,
  alignArrow,
  fullWidth = false,
  rel,
  target,
  ...props
}) => {
  return (
    <StyledDiv fullWidth={fullWidth}>
      <StyledMUILink
        alignArrow={alignArrow}
        href={href}
        underline={underline}
        variant={variant}
        color={color}
        rel={rel}
        target={target}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <StyledArrowIcons>
            <Arrow color={color} />
          </StyledArrowIcons>
        )}
      </StyledMUILink>
    </StyledDiv>
  );
};
