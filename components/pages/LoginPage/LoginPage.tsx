import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { PortalUser } from '#auth/PortalUser';
import { RegistrationForm } from '#components/forms/organisms/RegistrationForm/RegistrationForm';
import { SignInForm } from '#components/forms/organisms/SignInForm/SignInForm';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { SEO } from '#components/layouts/atoms/SEO/SEO';
import { PageOverlay } from '#components/layouts/molecules/PageOverlay/PageOverlay';
import { PageLayoutNoAuth } from '#components/layouts/organisms/PageLayoutNoAuth/PageLayoutNoAuth';
import { Paper } from '#components/layouts/organisms/Paper/Paper';
import { BasicTabs } from '#components/navigation/molecules/BasicTabs/BasicTabs';
import { TabPanel } from '#components/navigation/molecules/TabPanel/TabPanel';
import AppleIcon from '#public/icon-apple.svg';
import FacebookIcon from '#public/icon-facebook.svg';
import GoogleIcon from '#public/icon-google.svg';
import { theme } from '#styles/styles';

import {
  StyledButton,
  StyledButtonSection,
  StyledDivider,
  StyledIcon,
  StyledPaper,
  StyledSignIn,
  StyledSigninContainer,
  StyledTab,
  StyledTabsCon,
  StyledTabsContainer,
} from './LoginPage.styles';
import type { LoginPageProps } from './LoginPage.types';

export const LoginPage: React.FC<LoginPageProps> = ({ children, userAuthContent, ...props }) => {
  return (
    <PageLayoutNoAuth pageName="login" userAuthContent={userAuthContent}>
      <LoginPageContent userAuthContent={userAuthContent} {...props} />
      {children}
    </PageLayoutNoAuth>
  );
};

const LoginPageContent: React.FC<LoginPageProps> = ({
  onSuccess,
  onRegistrationSuccess,
  onError = () => null,
  onFacebookClick = () => null,
  onGoogleClick = () => null,
  onAppleClick = () => null,
  isShowSocialMediaButtons = false,
  userAuthContent,
}) => {
  const [curTab, setCurTab] = useState<number | undefined>(0);
  const [authenticated, setAuthenticated] = useState<boolean | undefined>(false);
  const [portalUser, setPortalUser] = useState<PortalUser | undefined>(undefined);
  const router = useRouter();
  const isPasswordReset = router.query.token !== undefined;

  useEffect(() => {
    void (async () => {
      void new PortalUser().isAuthenticated();
    })();

    setPortalUser(new PortalUser());

    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    let initTab = 0;
    if (q === 'register') {
      initTab = 1;
    }

    if (q === 'logout') {
      Cookies.remove('okta-token-storage');
    }

    setCurTab(initTab);
  }, []);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setCurTab(newValue);
  };

  useEffect(() => {
    const updateAuthenticated = async () => {
      const isAuthenticated = await portalUser?.isAuthenticated();
      setAuthenticated(isAuthenticated);
    };

    void updateAuthenticated();
  }, [portalUser]);

  useEffect(() => {
    if (router) {
      if (authenticated) {
        void router.push('/dashboard');
      } else {
        void router.prefetch('/dashboard');
      }
    }
  }, [authenticated, router]);

  const socialMedias = [
    {
      icon: FacebookIcon as string,
      alt: 'Facebook',
      color: theme.colors.chambray,
      buttonAction: onFacebookClick,
    },
    {
      icon: GoogleIcon as string,
      alt: 'Google',
      color: theme.colors.dodgerBlue,
      buttonAction: onGoogleClick,
    },
    {
      icon: AppleIcon as string,
      alt: 'Apple',
      color: theme.colors.carbon,
      buttonAction: onAppleClick,
    },
  ];

  return (
    <PageOverlay>
      <SEO
        title="Login and Registration - Progress Residential Favorite Homes"
        description="Login or Create your new account to view saved home on all of your devices"
        pageName="login"
      />
      <StyledPaper>
        <Paper
          innerElevation={0}
          outerElevation={10}
          showOuterPaper
          innerSquare
          innerTheme="gradient"
          outerTheme="plain"
          className="outer-paper"
        >
          <StyledTabsCon data-testid="styled-tabs">
            <BasicTabs>
              <StyledTabsContainer value={curTab} onChange={handleTabChange}>
                <StyledTab index={0} label="Sign In" value={0} />
                <StyledTab index={1} label="Register" value={1} />
              </StyledTabsContainer>
              <TabPanel index={0} value={curTab}>
                <StyledSigninContainer>
                  <StyledSignIn>
                    <SignInForm
                      onSuccess={onSuccess}
                      onError={onError}
                      flow={isPasswordReset ? 'resetPassword' : 'login'}
                      userAuthContent={userAuthContent}
                    />
                  </StyledSignIn>
                  {isShowSocialMediaButtons && (
                    <StyledButtonSection>
                      <StyledDivider>
                        <Divider customText="Or" />
                      </StyledDivider>
                      {socialMedias.map(({ icon, alt, color, buttonAction }) => (
                        <StyledButton fullWidth buttoncolor={color} variant="primary" key={alt} onClick={buttonAction}>
                          <StyledIcon>
                            <Image src={icon} width={27} height={27} alt={`${alt} Icon"`} />
                          </StyledIcon>
                          Continue with {alt}
                        </StyledButton>
                      ))}
                    </StyledButtonSection>
                  )}
                </StyledSigninContainer>
              </TabPanel>
              <TabPanel index={1} value={curTab}>
                <StyledSigninContainer>
                  <StyledSignIn>
                    <RegistrationForm userAuthContent={userAuthContent} onSuccess={onRegistrationSuccess} />
                  </StyledSignIn>
                </StyledSigninContainer>
              </TabPanel>
            </BasicTabs>
          </StyledTabsCon>
        </Paper>
      </StyledPaper>
    </PageOverlay>
  );
};
