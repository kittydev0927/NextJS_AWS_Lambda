import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { SEO } from '#components/layouts/atoms/SEO/SEO';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { theme } from '#styles/styles';

import { Card } from '../../layouts/molecules/Card/Card';
import { PageOverlay } from '../../layouts/molecules/PageOverlay/PageOverlay';
import { defaultData } from './defaultData';
import {
  StyledBody,
  StyledBoxContainer,
  StyledGrid,
  StyledGridContainer,
  StyledHeader,
  StyledInnerGridContainer,
  StyledPaper,
  StyledPaperContainer,
} from './SSOLandingPage.styles';
import type { SSOLandingPageProps } from './SSOLandingPage.types';

export const SSOLandingPage: React.FC<SSOLandingPageProps> = ({ children, ...props }) => {
  return (
    <PageLayout {...props}>
      <SEO pageName="landing page" />
      <LandingPageContent {...props} />
      {children}
    </PageLayout>
  );
};

const LandingPageContent: React.FC<SSOLandingPageProps> = ({
  children,
  maxwidth = 268,
  mediaImgHeight = 156,
  mediaElevation = 5,
  headingStyles = { mb: 1 },
  buttonVariant = 'primary',
  buttonSize,
  innerTheme = 'gradient',
  outerTheme,
  ...props
}) => {
  const profile = useProfile();
  const router = useRouter();
  const [windowPath, setWindowPath] = useState<string>('');
  const imageContent = defaultData(windowPath);

  useEffect(() => {
    async function redirectToDashboard() {
      if (profile) {
        void router.push('/dashboard');
      }
    }

    void redirectToDashboard();
  }, [profile, router]);

  useEffect(function onFirstMount() {
    setWindowPath(window.origin);
  }, []);

  return (
    <PageOverlay {...props}>
      <StyledPaperContainer>
        <StyledPaper
          innerElevation={0}
          outerElevation={10}
          showOuterPaper
          innerSquare
          className="outer-paper"
          innerTheme={innerTheme}
          outerTheme={outerTheme}
        >
          <ThemeProvider theme={theme}>
            <StyledBoxContainer>
              <StyledHeader variant="h2" align="center">
                Love Where You Live
              </StyledHeader>
              <StyledBody variant="body1">
                Home is where the heart is—which is why we consider the selection process equally as important as making
                your entire experience seamless. Whether your goals are more space for kids to play, a large backyard
                for your even larger dog, living in an HOA community, or all of the above, Progress Residential helps
                match you with your ideal home. Welcome home.
              </StyledBody>
            </StyledBoxContainer>
          </ThemeProvider>
          <StyledGridContainer container spacing={2} alignItems="center" direction="row" justifyContent="center">
            {imageContent.map((content, i) => {
              const { mediaImg, mediaImgColor, heading, body, url, mediaImgIconHeight, mediaImgIconWidth } = content;
              return (
                <StyledInnerGridContainer item xs={12} sm={12} md={4} index={i} key={content.id}>
                  <StyledGrid container alignItems="center" justifyContent="center" index={i}>
                    <Card
                      maxwidth={maxwidth}
                      mediaimgheight={mediaImgHeight}
                      mediaElevation={mediaElevation}
                      headingStyles={headingStyles}
                      buttonVariant={buttonVariant}
                      buttonSize={buttonSize}
                      mediaImg={mediaImg}
                      mediaimgcolor={mediaImgColor}
                      heading={heading}
                      body={body}
                      url={url}
                      buttonPosition="end"
                      buttonWidth="auto"
                      iconPosition="right"
                      mediaImgIconHeight={mediaImgIconHeight}
                      mediaImgIconWidth={mediaImgIconWidth}
                    />
                  </StyledGrid>
                </StyledInnerGridContainer>
              );
            })}
          </StyledGridContainer>
          {children}
        </StyledPaper>
      </StyledPaperContainer>
    </PageOverlay>
  );
};
