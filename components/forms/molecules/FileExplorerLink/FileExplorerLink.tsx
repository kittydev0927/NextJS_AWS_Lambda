import type { ChangeEvent } from 'react';

import { StyledContainer, StyledImage, StyledInput, StyledLabel } from './FileExplorerLink.styles';
import type { IFileExplorerLinkProps } from './FileExplorerLink.types';

export const FileExplorerLink: React.FC<IFileExplorerLinkProps> = ({
  linkText,
  linkName,
  onChange,
  icon,
  setValue,
}) => {
  const handleselectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      if (setValue) setValue(event.target.files?.[0]);
      console.info(event.target.files?.[0]);
      //open modal and pass file
      if (onChange) {
        onChange();
      }
    }
  };

  return (
    <StyledContainer id="fileExplorer">
      {icon && <StyledImage src={icon} width={26} height={22} alt="" />}
      <StyledLabel htmlFor={linkName ? linkName : 'selectedFile'}>{linkText}</StyledLabel>

      <StyledInput
        type="file"
        name={linkName ? linkName : 'selectedFile'}
        id={linkName ? linkName : 'selectedFile'}
        data-testid={`file-explorer-link-${linkText}`}
        onChange={handleselectedFile}
      />
    </StyledContainer>
  );
};
