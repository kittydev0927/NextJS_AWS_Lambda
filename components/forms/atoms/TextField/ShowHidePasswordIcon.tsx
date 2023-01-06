import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { StyledIconButton } from '#components/forms/atoms/TextField/TextField.style';
import hidePassword from '#public/hide-password.svg';
import viewPassword from '#public/view-password.svg';

interface ShowHidePasswordIconProps {
  statusWasChanged: (isShown: boolean) => void;
}
export const ShowHidePasswordIcon: React.FC<ShowHidePasswordIconProps> = ({ statusWasChanged }) => {
  const [isShown, setIsShown] = useState(false);
  const src = (isShown ? viewPassword : hidePassword) as string;
  const alt = isShown ? 'view' : 'hide';

  useEffect(() => {
    statusWasChanged(isShown);
  }, [isShown, statusWasChanged]);

  return (
    <StyledIconButton onClick={() => setIsShown(!isShown)} onMouseDown={e => e.preventDefault()} edge="end">
      <Image src={src} width={24} height={19} alt={`${alt} Password`} />
    </StyledIconButton>
  );
};
