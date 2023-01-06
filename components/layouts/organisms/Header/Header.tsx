// Commented out code is a temporary solution for Release 1 MVP
// in order limit user access to specific areas of the site.
// Please leave here for future iterations.
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { Modal } from '#components/forms/molecules/Modal/Modal';
import { RegistrationForm } from '#components/forms/organisms/RegistrationForm/RegistrationForm';
import { SignInForm } from '#components/forms/organisms/SignInForm/SignInForm';
import { HeaderLogo } from '#components/layouts/atoms/HeaderLogo/HeaderLogo';
import { IconButton } from '#components/navigation/atoms/IconButton/IconButton';
import { BasicTabs } from '#components/navigation/molecules/BasicTabs/BasicTabs';
import { Dropdown } from '#components/navigation/molecules/Dropdown/Dropdown';
// import { SearchField } from '#components/navigation/molecules/SearchField/SearchField';
// import { SubMenuButton } from '#components/navigation/molecules/SubMenuButton/SubMenuButton';
import { Tab } from '#components/navigation/molecules/Tab/Tab';
import { TabPanel } from '#components/navigation/molecules/TabPanel/TabPanel';
import { TabsContainer } from '#components/navigation/molecules/TabsContainer/TabsContainer';
// import { DesktopSubMenu } from '#components/navigation/organisms/DesktopSubMenu/DesktopSubMenu';
import { ExitAppModal } from '#components/navigation/organisms/ExitAppModal/ExitAppModal';
// import { MobileSubMenu } from '#components/navigation/organisms/MobileSubMenu/MobileSubMenu';
// import { CalculateProfileCompletion } from '#services/profile/CalculateProfileCompletion';
import { theme } from '#styles/styles';
// import { getSubmenuItems } from '#utils/__mocks__/menuItems';
// import { authUserMenu, navigationButtons } from '#utils/placeholderLinks';
import { authUserMenu } from '#utils/placeholderLinks';

// import { PortalSubMenu } from '../PortalSubMenu/PortalSubMenu';
import { StyledAppBar, StyledIcon, StyledToolbar } from './Header.styles';
import type { HeaderProps, IIconContainer } from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  storybookNotAuthenticatedView,
  disabled,
  // placeholder = 'Search',
  variant,
  pageName,
  onSuccess,
  onError = () => null,
  userAuthContent,
}) => {
  const [showModal, setShowModal] = useState(false); //store the showPassword false by default
  const [showExitModal, setShowExitModal] = useState(false); //store the showPassword false by default
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const user = useProfile();
  const userName = user ? user.firstName : '';
  const router = useRouter();
  const handleSuccess = onSuccess ?? (async () => router.push('/dashboard'));
  const recoveryToken = router?.query?.token ?? undefined;

  // const [showOptions, setShowOptions] = useState<boolean>(false);
  // const [selectedNav, setSelectedNav] = useState<Partial<Nav>>({});
  // const [selectedText, setSelectedText] = useState<string | undefined>('');
  // const { nextPage, next, completed } = CalculateProfileCompletion(user);
  // const [nextPageHref, setNextPageHref] = useState<string>('');

  // useEffect(() => {
  //   if (next === -1) {
  //     setNextPageHref('complete');
  //   } else {
  //     setNextPageHref(nextPage);
  //   }
  // }, [nextPage, next, completed]);

  // const showNavigationOptions = (nav: Nav) => {
  //   // TODO: Please provide context for this. If this one button needs special
  //   // treatment, should it have a flag on the `Nav` interface rather than
  //   // being called out as special here?
  //   const magicNumber = 4;

  //   if (nav.text === selectedText) {
  //     setSelectedText('');
  //     setSelectedNav({});
  //     setShowOptions(false);
  //   } else if (nav.id !== magicNumber) {
  //     setSelectedText(nav.text);
  //     setSelectedNav(nav);
  //     setShowOptions(true);
  //   }
  // };

  // const handleClose = () => {
  //   setSelectedText('');
  //   setSelectedNav({});
  //   setShowOptions(false);
  // };

  // Redirect to AEM site if AEM origin query param present
  useEffect(() => {
    const oktaToken = window.localStorage.getItem('okta-token-storage');
    if (oktaToken === undefined || oktaToken === null) {
      setLoading(false);
    } else {
      setLoading(true);
    }
    if (redirect) {
      if (router?.query?.origin) {
        const origin = router.query.origin as string;
        window.location.assign(origin);
      }

      // Else redirect to AEM home page
      if (process.env.NEXT_PUBLIC_AEM_URL) {
        window.location.assign(process.env.NEXT_PUBLIC_AEM_URL);
      }
    }
  }, [redirect, router?.query?.origin, user]);

  const handleShowExitModal = () => {
    if (router.pathname.includes('/application/')) {
      //method to show exit application confirmation modal on screen
      setShowExitModal(true);
    } else {
      setRedirect(true);
    }
  };

  const handleCloseExitMoal = () => {
    //method to hide exit application confirmation modal on screen
    setShowExitModal(false);
  };

  const handleClickOpen = () => {
    //method to show modal on screen
    setShowModal(true);
  };

  const handleClickClose = () => {
    //method to hide modal on screen
    setShowModal(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="Header-Container">
      <StyledAppBar position="static">
        <StyledToolbar disableGutters>
          {/* <div className="menu">
            <MobileSubMenu disabled={disabled} placeholder={placeholder} />
          </div> */}
          <div className="logo" onClick={handleShowExitModal}>
            <HeaderLogo />
          </div>
          {/* <div className="options">
            {navigationButtons.map(btn => (
              <div key={btn.id} className="Options-Container">
                <SubMenuButton
                  button={btn}
                  variant={variant}
                  disabled={disabled}
                  onClick={showNavigationOptions}
                  selectedText={selectedText}
                />
              </div>
            ))}
          </div>
          <div className="search">
            <SearchField disabled={disabled} placeholder={placeholder} />
          </div> */}
          {!pageName?.includes('login') && (
            <IconContainer
              user={storybookNotAuthenticatedView ? undefined : user}
              loading={loading}
              pageName={pageName}
              handleClickOpen={handleClickOpen}
              disabled={disabled}
              smallBreakpoint={smallBreakpoint}
              variant={variant}
              userName={userName}
              recoveryToken={recoveryToken}
            />
          )}
        </StyledToolbar>
      </StyledAppBar>
      {/* <DesktopSubMenu disabled={disabled} closeOptions={handleClose} open={showOptions} selectedNav={selectedNav} />
      {smallBreakpoint && user && (
        <PortalSubMenu resident={user.currentProgressResident} items={getSubmenuItems(nextPageHref)} />
      )} */}
      {showModal && (
        <Modal displayModalOnly showScroll onModalCloseCallback={handleClickClose}>
          <BasicTabs>
            <TabsContainer>
              <Tab index={0} label="Sign In" value={0} />
              <Tab index={1} label="Register" value={1} />
            </TabsContainer>
            <TabPanel index={0}>
              <SignInForm
                onSuccess={handleSuccess}
                onError={onError}
                flow={recoveryToken ? 'resetPassword' : 'login'}
                userAuthContent={userAuthContent}
              />
            </TabPanel>
            <TabPanel index={1}>
              <RegistrationForm userAuthContent={userAuthContent} />
            </TabPanel>
          </BasicTabs>
        </Modal>
      )}
      <ExitAppModal openModal={showExitModal} onModalCloseCallback={handleCloseExitMoal} />
    </Box>
  );
};

export const IconContainer: React.FC<IIconContainer> = ({
  user,
  loading,
  handleClickOpen,
  disabled,
  variant,
  userName,
  recoveryToken,
}) => {
  useEffect(() => {
    if (recoveryToken) {
      if (document.readyState === 'complete') {
        handleClickOpen();
      } else {
        window.addEventListener('load', handleClickOpen);
        return () => window.removeEventListener('load', handleClickOpen);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recoveryToken]);
  return (
    <StyledIcon className="icon">
      {!user && <IconButton onClick={handleClickOpen} disabled={disabled} defaultText={loading ? '' : 'Login'} />}
      {user &&
        authUserMenu.map(btn => (
          <div key={btn.id}>
            <Dropdown button={btn} variant={variant} disabled={disabled} showDownArrow={false} userName={userName} />
          </div>
        ))}
    </StyledIcon>
  );
};
