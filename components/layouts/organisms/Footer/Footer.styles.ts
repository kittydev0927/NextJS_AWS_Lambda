import { styled } from '@mui/material';

export const StyledFooter = styled('div')`
  background: ${({ theme }) => theme.colors.accessibleGreen};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const StyledFooterContainer = styled('div')`
  margin: 0 auto;
  display: grid;
  padding: 75px 20px 20px;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 1fr 1fr 0.4fr;
  grid-template-areas:
    'logo'
    'contact'
    'company'
    'compliance';
  gap: 0px 0px;

  .logo {
    grid-area: logo;
  }
  .compliance {
    grid-area: compliance;
    display: flex;
    align-items: center;
    img:nth-child(1) {
      margin-right: 30px;
    }
  }
  .contact {
    grid-area: contact;
  }
  .company {
    grid-area: company;
  }
  .logo,
  .contact,
  .company {
    padding-right: 10px;
    h3 {
      color: ${({ theme }) => theme.colors.white};
    }
    p {
      margin: 0;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      font-size: 24px;
      line-height: 1.6;
    }
  }
  // set size for footer icons
  .MuiSvgIcon-root {
    font-size: 2.4rem;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 85px 80px 50px;
    grid-template-columns: 0.6fr 0.9fr 0.9fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'logo contact company'
      'compliance contact company';
  }
`;

export const StyledLogo = styled('div')`
  max-width: 180px;
  padding-right: 20px;
`;

export const StyledFooterBottom = styled('div')`
  margin-top: -95px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-top: 43px;
  }
`;

export const StyledCompanyLinks = styled('div')`
  max-width: 190px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 300px;
  }
`;

export const StyledResourcesLinks = styled('div')``;
