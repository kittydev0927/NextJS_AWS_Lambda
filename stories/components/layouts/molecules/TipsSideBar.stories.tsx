import { styled } from '@mui/material';
import type { Meta, Story } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { IApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';
import { SideBarButton } from '#components/forms/atoms/SideBarButton/SideBarButton';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { TipsSideBar as TipsSideBarComponent } from '#components/layouts/molecules/TipsSideBar/TipsSideBar';
import type { ButtonPositionProps } from '#components/layouts/molecules/TipsSideBar/TipsSideBar.types';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { Paper } from '#components/layouts/organisms/Paper/Paper';
import { appTips as appTipsSample } from '#utils/sampleTipsSidebar';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Components/Layouts/Molecules/Tips Side Bar',
  component: TipsSideBarComponent,
} as Meta;

const StyledPaperContainer = styled('div')`
  min-height: 713px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: transparent;
`;

const StyledPaper = styled(Paper)`
  height: 100%;
  padding-right: 0px;
  margin: 0px;
  .MuiPaper-root {
    padding: 0px;
  }
`;

const StyledMainContainer = styled('div')`
  display: grid;
  background-color: transparent;
  padding: 70px 70px 70px 70px;
`;

const StyledButtonWrapper = styled('div')<ButtonPositionProps>`
  margin-right: 35px;
  margin-top: 101px;
  position: absolute;
  right: ${({ right }) => right}px;
  top: ${({ top }) => top}px;
`;

export const ExamplePaper: React.FC = () => {
  const [height, setHeight] = useState<number>();
  const [tipsOpen, setTipsOpen] = useState(false);
  const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    setHeight(containerRef.current?.offsetHeight);
  }, []);

  const handleDrawerOpen = () => {
    setTipsOpen(true);
  };

  const handleDrawerClose = () => {
    setTipsOpen(false);
  };

  return (
    <PageLayout userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}>
      <StyledMainContainer>
        {!tipsOpen && (
          <StyledButtonWrapper top={133} right={5}>
            <SideBarButton onClick={tipsOpen ? handleDrawerClose : handleDrawerOpen} buttonState="closed" />
          </StyledButtonWrapper>
        )}
        <StyledPaperContainer ref={containerRef}>
          <StyledPaper
            innerElevation={0}
            outerElevation={10}
            showOuterPaper
            innerSquare
            className="outer-paper"
            innerTheme={'plain'}
            outerTheme={'plain'}
          >
            <TipsSideBarComponent
              containerProp={containerRef.current}
              containerHeight={height}
              open={tipsOpen}
              setOpen={setTipsOpen}
            >
              <TipsInnerContent appTips={appTipsSample as IApplicationItem} />
            </TipsSideBarComponent>
          </StyledPaper>
        </StyledPaperContainer>
      </StyledMainContainer>
    </PageLayout>
  );
};

const Template: Story = () => {
  return <ExamplePaper />;
};

export const TipsSideBar = Template.bind({});
