import React from 'react';

import { Illustration } from '#components/layouts/atoms/Illustration/Illustration';
import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

import { Button } from '../../atoms/Button/Button';
import { Modal } from '../../molecules/Modal/Modal';
import {
  StyledButton,
  StyledProfileBuild,
  StyledProfileIllustration,
  StyledSavedHomesText,
  StyledTextCon,
  StyledTextMainCon,
  StyledWelcome,
} from './ProfileBuild.styles';
import type { ProfileBuildProps } from './ProfileBuild.types';

export const ProfileBuild: React.FC<ProfileBuildProps> = ({ user, displayModalOnly, buttonContent, ...props }) => {
  return (
    <StyledProfileBuild>
      <Modal displayModalOnly={displayModalOnly} buttonContent={buttonContent} {...props} maxWidth="700px">
        <StyledTextCon>
          <StyledProfileIllustration>
            <Illustration
              src="/image-sign-in.png"
              width="149px"
              height="101px"
              alt="It's great to see you. Please come in and stay awhile."
            />
          </StyledProfileIllustration>
          <StyledWelcome>
            <Typography textVariant={'h2'} sx={{ paddingBottom: '0', fontSize: '24px' }}>
              Welcome back,
            </Typography>
            <Typography textVariant={'h2'} sx={{ paddingBottom: '10px', fontSize: '24px' }}>
              {user?.firstName}
            </Typography>
          </StyledWelcome>
        </StyledTextCon>
        <StyledTextMainCon>
          <Typography textVariant="body1">
            Homes are going fast but we saved this one for you! And just in case this isn&apos;t THE ONE, you can answer
            a few quick questions that will help us help you find the perfect match.
          </Typography>
        </StyledTextMainCon>
        <StyledButton>
          <Button fullWidth variant="primary">
            Build My Profile
          </Button>
        </StyledButton>
        <StyledSavedHomesText>
          <Typography textVariant="body1" sx={{ marginTop: '25px', textAlign: 'center' }}>
            No thanks. I just want to view my{' '}
            <Link href="#" underline="always" variant="body2">
              Saved Homes
            </Link>
          </Typography>
        </StyledSavedHomesText>
      </Modal>
    </StyledProfileBuild>
  );
};
