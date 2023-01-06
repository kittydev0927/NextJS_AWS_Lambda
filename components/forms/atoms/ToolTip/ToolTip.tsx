import React from 'react';

import { StyledIcon, StyledLink, StyledText, StyledTooltip } from '#components/forms/atoms/ToolTip/ToolTip.styles';
import type { ToolTipProps } from '#components/forms/atoms/ToolTip/ToolTip.types';

export const ToolTip: React.FC<ToolTipProps> = ({ content, placement = 'bottom', open = false, setOpen }) => {
  return (
    <StyledTooltip
      open={open}
      data-testid="tool-tip"
      arrow
      title={content.map(item => (
        <StyledText key={item.value} data-testid="tool-tip-styled-text">
          {item.value}
          <StyledLink href={item.href} data-testid="tool-tip-styled-link">
            {item.linkText}
          </StyledLink>
        </StyledText>
      ))}
      placement={placement}
    >
      <StyledIcon onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} />
    </StyledTooltip>
  );
};
