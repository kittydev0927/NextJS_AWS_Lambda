import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { FileExplorerLink } from '#components/forms/molecules/FileExplorerLink/FileExplorerLink';
import type { IFileExplorerLinkProps } from '#components/forms/molecules/FileExplorerLink/FileExplorerLink.types';
import cloudFileUpload from '#public/cloud-file-upload.svg';
import { theme } from '#styles/styles';

import { StyledContainer, StyledImageWrapper, StyledUploadWrapper } from './DocumentUploadBox.styles';

export const DocumentUploadBox: React.FC<IFileExplorerLinkProps> = ({ linkText, onChange }) => {
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <StyledContainer>
      <StyledImageWrapper>
        {breakpoint ? (
          <Image src={cloudFileUpload as string} width={94} height={68} alt="" data-testid="file-upload-icon" />
        ) : (
          <Image src={cloudFileUpload as string} width={39} height={28} alt="" data-testid="file-upload-icon" />
        )}
      </StyledImageWrapper>
      <StyledUploadWrapper>
        <FileExplorerLink linkText={linkText} icon="" onChange={onChange} />
      </StyledUploadWrapper>
    </StyledContainer>
  );
};
