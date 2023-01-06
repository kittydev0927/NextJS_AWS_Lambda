import React, { useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import { Select } from '#components/forms/atoms/Select/Select';
import type { MostInterestedProps } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection.types';

import {
  StyledAdditionAnswerInput,
  StyledAdditionAnswerSelect,
  StyledBuilderHeader,
  StyledCheckboxWrapper,
  StyledTopRight,
} from './MostInterestedSection.styles';

export const MostInterestedSection: React.FC<MostInterestedProps> = ({ options }) => {
  const [localOptions, setLocalOptions] = useState(options);

  function handleOnChange(
    label: string | number | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | undefined,
  ) {
    return () => {
      const updatedOptions = localOptions.map(item => ({
        ...item,
        checked: item.label === label && !item.checked,
      }));
      setLocalOptions(updatedOptions);
    };
  }

  return (
    <StyledTopRight className="pb-top-right" data-testid="most-interested">
      <StyledBuilderHeader variant="h5" align="left" data-testid="most-interested-header">
        We&apos;re excited to get to know you better. What brought you to Progress Residential?
      </StyledBuilderHeader>
      <StyledCheckboxWrapper>
        {localOptions.map(({ label, name, checked = false, additionAnswer }) => {
          return (
            <>
              <Checkbox
                size="medium"
                key={name}
                label={label}
                checked={checked}
                onChange={handleOnChange(label)}
                name={name}
              />
              {checked && additionAnswer && additionAnswer === 'input' && (
                <StyledAdditionAnswerInput placeholder="Tell us more" data-testid="add-input-answer" type={'text'} />
              )}
              {checked && additionAnswer && additionAnswer !== 'input' && (
                <StyledAdditionAnswerSelect>
                  <Select
                    placeholder="Select Length"
                    data-testid="add-select-answer"
                    options={additionAnswer?.selectOptions}
                  />
                </StyledAdditionAnswerSelect>
              )}
            </>
          );
        })}
      </StyledCheckboxWrapper>
    </StyledTopRight>
  );
};
