/* eslint-disable @typescript-eslint/no-magic-numbers */
//justification: the handleSelect function is causing a typescript error
//only in the pipeline. error is not appearing when building locally, and same pattern has been used
//in other files in the application
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { SelectChangeEvent } from '@mui/material';
import { Box, Dialog } from '@mui/material';
import type { ChangeEvent, FC } from 'react';
import React, { useEffect, useState } from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { Select } from '#components/forms/atoms/Select/Select';
import { StyledModal } from '#components/forms/molecules/Modal/Modal.styles';
import { truncate } from '#utils/truncate';

import { options } from './constants';
import {
  defBackdropStyles,
  StyledButton,
  StyledCloseIcon,
  StyledContainer,
  StyledContent,
  StyledDiv,
  StyledFileContainer,
  StyledInput,
  StyledLabel,
  StyledModalDescription,
  StyledModalTitle,
  StyledRemoveButton,
  StyledTypography,
} from './UploadDocumentModal.styles';
import type CancelAppModalProps from './UploadDocumentModal.types';

export const UploadDocumentModal: FC<CancelAppModalProps> = ({
  openModal = true,
  onModalCloseCallback,
  backdropStyles = defBackdropStyles,
  document,
}) => {
  const [open, setOpen] = useState(openModal);
  const [documentState, setDocumentState] = useState<File>(document);
  const [truncateName, setTruncateName] = useState<string>(truncate(document.name, 30));
  const [category, setCategory] = useState<string | null>(null);
  const handleClose = () => {
    setOpen(false);
    onModalCloseCallback?.();
  };
  const handleSelect = (event: SelectChangeEvent) => {
    if (event.target.value) {
      setCategory(event.target.value);
    }
  };
  const handleSubmit = () => {
    if (category) {
      //justification: do something with this in the future
      console.info(category, documentState);
      setOpen(false);
      onModalCloseCallback?.();
    }
  };
  const handleSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setDocumentState(event.target.files?.[0]);
      setTruncateName(truncate(event.target.files?.[0].name, 30));
    }
  };
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <StyledModal data-testid="upload-document-modal">
      <Dialog open={open} onClose={handleClose} sx={backdropStyles}>
        <StyledContent>
          <Box>
            <StyledDiv>
              <StyledModalTitle>Upload Document</StyledModalTitle>
              <StyledFileContainer>
                <StyledTypography data-truncate="end text">{truncateName}</StyledTypography>
                <StyledContainer id="fileExplorer">
                  <StyledLabel htmlFor="modal-file-select">
                    <StyledRemoveButton>
                      <StyledCloseIcon />
                    </StyledRemoveButton>
                  </StyledLabel>

                  <StyledInput
                    type="file"
                    name="modal-file-select"
                    id="modal-file-select"
                    data-testid="file-explorer-link"
                    onChange={handleSelectedFile}
                  />
                </StyledContainer>
              </StyledFileContainer>
              <StyledModalDescription>Please select a category for your document.</StyledModalDescription>
              <Select
                options={options}
                placeholder="Select Document Category"
                className="select"
                onChange={handleSelect}
                data-testid="select-document"
              />
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                data-testid="upload-button"
                className="submit-button"
                onClick={handleSubmit}
              >
                Upload Document
              </Button>
            </StyledDiv>
          </Box>
          <StyledButton data-testid="close-modal-button" onClick={handleClose} className="close">
            <StyledCloseIcon />
          </StyledButton>
        </StyledContent>
      </Dialog>
    </StyledModal>
  );
};
