import Image from 'next/image';
import React, { useState } from 'react';

import LeftChevron from '#public/LeftChevron.svg';
import RightChevron from '#public/RightChevron.svg';

import {
  StyledPageIcon,
  StyledPaginationButtons,
  StyledPaginationCenter,
  StyledPaginationContainer,
  StyledPrimaryContainer,
  StyledScrollButton,
} from './PaginationControl.styles';
import type { PaginationControlProps } from './PaginationControl.types';

export const PaginationControl: React.FC<PaginationControlProps> = ({ pageCount = 4, onClickNext, onClickPrev }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (e: React.MouseEvent, action: 'up' | 'down' | 'custom', number: number): void => {
    if (action === 'up' && currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
      onClickNext(e);
    } else if (action === 'down' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onClickPrev(e);
    } else if (action === 'custom') {
      setCurrentPage(number);
    }
  };
  const pageCounter = Array.from(Array(pageCount).keys());
  return (
    <StyledPrimaryContainer data-testid="PaginationControl">
      <StyledPaginationContainer>
        <StyledPaginationCenter count={pageCount}>
          {pageCounter.map(val => {
            return (
              <StyledPageIcon
                key={`page_${val}`}
                currentpage={currentPage}
                index={val + 1}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => handlePageChange(e, 'custom', val + 1)}
                data-testid="pageIndicator"
              />
            );
          })}
        </StyledPaginationCenter>
        <StyledPaginationButtons>
          <StyledScrollButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePageChange(e, 'down', 0)}
            data-testid="previouspagebutton"
          >
            <Image src={LeftChevron as string} width={35} height={35} alt="LeftChevron" />
          </StyledScrollButton>
          <StyledScrollButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePageChange(e, 'up', 0)}
            data-testid="nextpagebutton"
          >
            <Image src={RightChevron as string} width={35} height={35} alt="RightChevron" />
          </StyledScrollButton>
        </StyledPaginationButtons>
      </StyledPaginationContainer>
    </StyledPrimaryContainer>
  );
};
