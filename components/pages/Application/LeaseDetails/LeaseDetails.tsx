import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import type { DatePickerProps } from '#components/forms/atoms/DatePicker/DatePicker.types';
import { ToolTip } from '#components/forms/atoms/ToolTip/ToolTip';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { FileExplorerLink } from '#components/forms/molecules/FileExplorerLink/FileExplorerLink';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import TermsAndConditionsModal from '#components/navigation/organisms/TermsAndConditionsModal/TermsAndConditionsModal';
import { theme } from '#styles/styles';
import { termsAndConditions } from '#utils/sampleTermsAndConditionsData';

import { MINIMUM_DATE_DAYS, MINIMUM_DATE_SECONDS, STEP_NUMBER_THREE } from './constants';
import {
  StyledAdditionalSubTextContainer,
  StyledCheckboxTextContainer,
  StyledCheckboxWrapper,
  StyledContainer,
  StyledDatePicker,
  StyledDD,
  StyledDetailsContainer,
  StyledDT,
  StyledEnrollCheckboxContainer,
  StyledEnrollTextContainer,
  StyledFormControl,
  StyledHeader,
  StyledInputLabel,
  StyledLeaseSelect,
  StyledLinkWrapper,
  StyledPageLayoutApplication,
  StyledSubText,
  StyledSubTextContainer,
  StyledTermsLink,
  StyledText,
  StyledVertDiv,
  StyledVoucherContainer,
} from './LeaseDetails.styles';
import type { LeaseDetailsProps } from './LeaseDetails.types';

export const LeaseDetails: React.FC<LeaseDetailsProps> = ({ primaryApplicant = true, pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];
  const [value, setValue] = useState<Date | null>(null);
  const [acknowledged, setAcknowledged] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [enrolled, setEnrolled] = useState(Boolean);
  const [modalOpen, setModalOpen] = useState(false);
  const [voucher, setVoucher] = useState<File | undefined>();
  const [rta, setRta] = useState<File | undefined>();
  const [termOptions, setTermOptions] = useState<{ label: string; value: string }[]>([]);

  function isValid() {
    if (
      (!primaryApplicant && acknowledged) ||
      (value && acknowledged && !enrolled) ||
      (value && acknowledged && enrolled && voucher && rta)
    ) {
      return true;
    }
    return false;
  }

  const minimumDate = new Date(Date.now() + MINIMUM_DATE_DAYS * MINIMUM_DATE_SECONDS);

  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push('/application/background');
  }, [router]);
  console.warn('Lease Detailvalue::  ', termOptions);
  const nextPage = useCallback(async () => {
    void router.push(`/application${primaryApplicant ? '/applicants' : '/applicant-info'}`);
  }, [primaryApplicant, router]);

  const onChange: NonNullable<DatePickerProps['onChange']> = newValue => {
    setValue(newValue ?? new Date());
  };

  useEffect(() => {
    //setting lease terms months options
    for (let i = 6, len = 24; i <= len; i += 1) {
      const newTermOption = { label: `${i} Months*`, value: `${i} Months*` };
      setTermOptions(termOptions => [...termOptions, newTermOption]);
    }
  }, []);

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledPageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        prevPage={prevPage}
        nextPage={nextPage}
        step={primaryApplicant ? 2 : STEP_NUMBER_THREE}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
        isNextButtonDisabled={!isValid()}
      >
        <StyledContainer data-testid="lease-details-page">
          {!primaryApplicant ? (
            <>
              <StyledHeader>The primary applicant has selected the following: </StyledHeader>
              <StyledDetailsContainer>
                Move in Date<span>12/15/21</span>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                Lease Terms
                <span>13 Months*</span>
              </StyledDetailsContainer>
              <StyledAdditionalSubTextContainer>
                <StyledSubText>
                  *Rent prices are expected to increase after the first 12 months of the lease term.
                </StyledSubText>
              </StyledAdditionalSubTextContainer>{' '}
            </>
          ) : (
            <>
              <StyledText>
                <StyledDT>1.&nbsp;</StyledDT>
                <StyledDD>When would you like your lease to start?</StyledDD>
              </StyledText>
              <StyledDatePicker
                onChange={onChange}
                value={value}
                minDate={minimumDate}
                label=""
                onError={() => console.info('date picker error')}
              />
              <StyledText>
                <StyledDT>2.&nbsp;</StyledDT>
                <StyledDD>How long of a lease would you like?</StyledDD>
              </StyledText>
              <StyledFormControl>
                <StyledInputLabel shrink htmlFor="select-multiple-native">
                  Lease Term
                </StyledInputLabel>{' '}
                <StyledLeaseSelect
                  label="Lease Term"
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                  options={termOptions}
                  defaultValue={'13 Months*'}
                />
              </StyledFormControl>
              <StyledSubTextContainer>
                <StyledSubText>
                  *Rent prices are expected to increase after the first 12 months of the lease term.
                </StyledSubText>
              </StyledSubTextContainer>
              <StyledEnrollTextContainer>
                <StyledText onClick={() => setShowTooltip(!showTooltip)} data-testid="housing-choice">
                  <StyledDT>3.&nbsp;</StyledDT>
                  <StyledDD>
                    <StyledVertDiv>Are you enrolled in Housing Choice?&nbsp;</StyledVertDiv>
                    <ToolTip
                      open={showTooltip}
                      content={[
                        {
                          value:
                            'Progress Residential accepts Housing Choice vouchers. For more information on Housing Choice, please ',
                          href: '',
                          linkText: 'click here.',
                        },
                      ]}
                      setOpen={setShowTooltip}
                    />
                  </StyledDD>
                </StyledText>
              </StyledEnrollTextContainer>
              <StyledEnrollCheckboxContainer>
                <Checkbox label="Yes" checked={enrolled} onClick={() => setEnrolled(true)} name="yes" />
                <Checkbox label="No" checked={!enrolled} onClick={() => setEnrolled(false)} name="no" />
              </StyledEnrollCheckboxContainer>
              {enrolled && (
                <StyledVoucherContainer>
                  <span>In order to continue, you must upload your housing choice voucher and RTA document below.</span>
                  <StyledLinkWrapper data-testid="voucher-link">
                    <FileExplorerLink
                      linkName="voucher"
                      linkText="Upload Housing Choice Voucher"
                      icon=""
                      setValue={setVoucher}
                    />
                  </StyledLinkWrapper>
                  <StyledLinkWrapper data-testid="rta-link">
                    <FileExplorerLink linkName="rta" linkText="Upload RTA Document" icon="" setValue={setRta} />
                  </StyledLinkWrapper>
                </StyledVoucherContainer>
              )}
            </>
          )}
          <StyledCheckboxWrapper>
            <Checkbox
              data-testid="checkbox-terms-conditions"
              name="terms-conditions"
              size="medium"
              label={
                <StyledCheckboxTextContainer>
                  By continuing you acknowledge that you have read and agree to the{' '}
                  <StyledLinkWrapper>
                    <StyledTermsLink onClick={() => setModalOpen(true)}>Terms & Conditions</StyledTermsLink>
                  </StyledLinkWrapper>{' '}
                  for this home.
                </StyledCheckboxTextContainer>
              }
              labelColor={theme.colors.darkGray}
              checked={acknowledged}
              onChange={() => setAcknowledged(!acknowledged)}
            />
          </StyledCheckboxWrapper>
        </StyledContainer>
      </ApplicationPageWrapper>
      {modalOpen && (
        <TermsAndConditionsModal
          setAcknowledged={setAcknowledged}
          setModalOpen={setModalOpen}
          text={termsAndConditions}
        />
      )}
    </StyledPageLayoutApplication>
  );
};
