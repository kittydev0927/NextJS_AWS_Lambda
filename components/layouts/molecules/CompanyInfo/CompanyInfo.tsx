import Grid from '@mui/material/Grid';
import React from 'react';

import { StyledCompanyLinks, StyledResourcesLinks } from '#components/layouts/organisms/Footer/Footer.styles';
import { smallLinkList } from '#utils/placeholderLinks';

import { LinksListSmall } from '../LinksListSmall/LinksListSmall';
import { StyledCompanyInfo, StyledLinkGroups } from './CompanyInfo.styles';
import type { CompanyInfoProps } from './CompanyInfo.types';

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ linkColor, textStyles, textAlign, textVariant }) => {
  return (
    <StyledCompanyInfo>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <StyledLinkGroups>
            <StyledCompanyLinks>
              <LinksListSmall
                textAlign={textAlign}
                textVariant={textVariant}
                textStyles={textStyles}
                linkColor={linkColor}
                text={smallLinkList[1].heading}
                links={smallLinkList[1].links}
              />
            </StyledCompanyLinks>
            <StyledResourcesLinks>
              <LinksListSmall
                textAlign={textAlign}
                textVariant={textVariant}
                textStyles={textStyles}
                linkColor={linkColor}
                text={smallLinkList[2].heading}
                links={smallLinkList[2].links}
              />
            </StyledResourcesLinks>
          </StyledLinkGroups>
        </Grid>
      </Grid>
    </StyledCompanyInfo>
  );
};
