import React from 'react';

import { smallLinkList } from '#utils/placeholderLinks';

import { LinksListSmall } from '../LinksListSmall/LinksListSmall';
import { StyledContact } from './ContactInfo.styles';
import type { ContactInfoProps } from './ContactInfo.types';

export const ContactInfo: React.FC<ContactInfoProps> = ({
  children,
  linkColor,
  textStyles,
  textAlign,
  textVariant,
  ...props
}) => {
  return (
    <StyledContact {...props}>
      <LinksListSmall
        textAlign={textAlign}
        textVariant={textVariant}
        textStyles={textStyles}
        linkColor={linkColor}
        text={smallLinkList[0].heading}
        links={smallLinkList[0].links}
      />
      {children}
    </StyledContact>
  );
};
