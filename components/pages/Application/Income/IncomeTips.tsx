import { StyledLeaseTips, StyledTipsBullet, StyledTipsText, StyledTipsTitle } from './Income.styles';

export const IncomeTips = () => (
  <StyledLeaseTips>
    <StyledTipsTitle>Applicants</StyledTipsTitle>

    <StyledTipsText>
      We love residents of all ages, but applicants must be 18 years of age or older. Each person who is 18 or older
      will need to complete a seperate Lease Applicant.
    </StyledTipsText>

    <StyledTipsTitle>Documents</StyledTipsTitle>

    <StyledTipsText>All applicants will need the following documents to complete the applicantion:</StyledTipsText>

    <ul>
      <li>
        <StyledTipsBullet>Valid state or government-issued photo Identification</StyledTipsBullet>
      </li>
      <li>
        <StyledTipsBullet>Social Security Number</StyledTipsBullet>
      </li>
      <li>
        <StyledTipsBullet>Vehical Information (depending on HOA)</StyledTipsBullet>
      </li>
    </ul>
  </StyledLeaseTips>
);
