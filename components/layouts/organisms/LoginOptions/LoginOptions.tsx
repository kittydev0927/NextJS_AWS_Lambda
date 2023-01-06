import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import type { ILoginLandingItem } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import ArrowRight from '#public/arrow.svg';
import CurrentRes from '#public/current-residents.svg';
import NewApplicant from '#public/new-applicant.svg';
import { theme } from '#styles/styles';

import {
  StyledLink,
  StyledMobileLink,
  StyledMobileLoginButton,
  StyledNewAppImgWrapper,
  StyledOption,
  StyledOptionButton,
  StyledOptionContainer,
  StyledOptionContent,
  StyledOptionContentText,
  StyledOptionContentTitle,
  StyledOptionHeader,
  StyledOptionText,
  StyledResImgWrapper,
  StyledWelcomeContainer,
} from './LoginOptions.styles';
import type { ILoginOptions } from './LoginOptions.types';

export const LoginOptions: React.FC<ILoginOptions> = ({ onNewApplicantClick, userAuthContent }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  const arrangeContent = (content: ILoginLandingItem[]) => {
    let headerContent = {} as ILoginLandingItem;
    let prospects = {} as ILoginLandingItem;
    let residents = {} as ILoginLandingItem;
    content.forEach((fragment: ILoginLandingItem) => {
      if (fragment.cfId === 'sign-in-landing-welcome') {
        headerContent = fragment;
      }
      if (fragment.cfId === 'sign-in-landing-prospects') {
        prospects = fragment;
      }
      if (fragment.cfId === 'sign-in-landing-residents') {
        residents = fragment;
      }
    });
    return { headerContent, prospects, residents };
  };

  const content = arrangeContent(userAuthContent?.loginLandingPageContent.items);

  return (
    <>
      <StyledWelcomeContainer variant="h3">
        {content?.headerContent?.cfHeading?.json[0]?.content[0]?.value}
      </StyledWelcomeContainer>
      <StyledOptionText variant="body1">
        {content?.headerContent?.cfContent?.json[0]?.content[0]?.value}
      </StyledOptionText>
      <StyledOptionContainer>
        <StyledOption data-testid="resident-login-option">
          <StyledOptionHeader>
            <StyledResImgWrapper>
              <Image src={CurrentRes as string} width={80.23} height={87.53} alt="" />
            </StyledResImgWrapper>
          </StyledOptionHeader>
          <StyledOptionContent>
            <StyledOptionContentTitle>
              {content?.residents?.cfHeading?.json[0]?.content[0]?.value}
            </StyledOptionContentTitle>
            <StyledOptionContentText>
              {content?.residents?.cfContent?.json[0]?.content[0]?.value}
            </StyledOptionContentText>
            {smallBreakpoint ? (
              <StyledMobileLink href="https://rentprogress.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx">
                Login&nbsp;&nbsp;
                <Image src={ArrowRight as string} width={11.21} height={12.98} alt="" />
              </StyledMobileLink>
            ) : (
              <StyledLink href="https://rentprogress.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx">
                Login
              </StyledLink>
            )}
          </StyledOptionContent>
        </StyledOption>
        <StyledOption data-testid="applicant-option" className="new-app">
          <StyledOptionHeader className="new-user">
            <StyledNewAppImgWrapper>
              <Image src={NewApplicant as string} width={80.23} height={87.53} alt="" />
            </StyledNewAppImgWrapper>
          </StyledOptionHeader>
          <StyledOptionContent>
            <StyledOptionContentTitle>
              {content?.prospects?.cfHeading?.json[0]?.content[0]?.value}
            </StyledOptionContentTitle>
            <StyledOptionContentText>
              {content?.prospects?.cfContent?.json[0]?.content[0]?.value}
            </StyledOptionContentText>
            {smallBreakpoint ? (
              <>
                <StyledMobileLoginButton onClick={onNewApplicantClick}>
                  Login/Register&nbsp;&nbsp;
                  <Image src={ArrowRight as string} width={11.21} height={12.98} alt="" />
                </StyledMobileLoginButton>
              </>
            ) : (
              <StyledOptionButton fullWidth onClick={onNewApplicantClick} data-testid="applicant-option-button">
                Login/Register
              </StyledOptionButton>
            )}
          </StyledOptionContent>
        </StyledOption>
      </StyledOptionContainer>
    </>
  );
};
