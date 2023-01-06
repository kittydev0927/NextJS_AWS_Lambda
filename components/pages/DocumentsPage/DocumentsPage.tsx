import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import type { DocumentRowProps } from '#components/layouts/molecules/DocumentRow/DocumentRow.types';
import { DocumentTable } from '#components/layouts/organisms/DocumentTable/DocumentTable';
import { DocumentUploadBox } from '#components/layouts/organisms/DocumentUploadBox/DocumentUploadBox';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { theme } from '#styles/styles';

import { StyledAllDoc, StyledDocHeader, StyledHeaderLinks, StyledSolidBackground } from './DocumentsPage.styles';
import type { DocumentsPageProps } from './DocumentsPage.types';

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ rows, ...props }) => {
  const [docList] = useState<DocumentRowProps[]>(rows ?? []);
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

  const onChange = () => {
    alert('File Selected');
  };
  return (
    <PageLayout pageName="documents" data-testid="documents-page" showBackToTop {...props}>
      <StyledSolidBackground component="div">
        <StyledHeaderLinks component="div">
          Have Questions?{smallBreakpoint && <br />} See&nbsp;
          <a href="https://rentprogress.com/faq/" target="_blank" rel="noreferrer">
            FAQs
          </a>
          &nbsp;or&nbsp;
          <a href="https://rentprogress.com/contact-us/" target="_blank" rel="noreferrer">
            Contact Us
          </a>
        </StyledHeaderLinks>
        <StyledDocHeader textVariant="h5">Documents</StyledDocHeader>
        <DocumentUploadBox linkText="Upload Documents" icon="" onChange={onChange} />
        <StyledAllDoc component="div">
          <DocumentTable rows={docList} />
        </StyledAllDoc>
      </StyledSolidBackground>
    </PageLayout>
  );
};
