import React, { useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';

import { StyledCheckbox, StyledCheckboxWrapper } from './MultiSelect.styles';
import type { MultiSelectOptionProps, MultiSelectProps } from './MultiSelect.types';

export const MultiSelect: React.FC<MultiSelectProps> = ({ options, onSelectedOptions }) => {
  const [localOptions, setLocalOptions] = useState(options);

  const handleOnChange = function (label: MultiSelectOptionProps['label']) {
    let updatedOptions: MultiSelectOptionProps[];
    const noneOfAboveText = 'None of the Above';
    const isNoneOfAboveChecked = localOptions.find(
      object => object.content[0].value === noneOfAboveText && object.checked,
    );
    if (isNoneOfAboveChecked) {
      //when none of the Above is checked and if user tries to select other option than reset all checkbox
      updatedOptions = localOptions.map(item => {
        return {
          ...item,
          checked: item.content[0].value === label && !item.checked,
        };
      });
    } else {
      updatedOptions = localOptions.map(item => {
        let _checkedStatus = false;
        //used if else below as there is no-nested-ternary rule applied
        if (label === noneOfAboveText && item.content[0].value === noneOfAboveText && !item.checked) {
          //allow only none of the above option checked
          _checkedStatus = !item.checked;
        } else if (label === noneOfAboveText && item.checked) {
          //check to remove all checks when none of the above is selected
          _checkedStatus = false;
        } else if (item.content[0].value === label && !item.checked) {
          _checkedStatus = true;
        } else if (item.content[0].value === label && item.checked) {
          _checkedStatus = false;
        } else if (item.checked) {
          _checkedStatus = item.checked;
        }
        return {
          ...item,
          checked: _checkedStatus,
        };
      });
    }

    return () => {
      onSelectedOptions(updatedOptions.filter(value => value.checked));
      setLocalOptions(updatedOptions);
    };
  };

  return (
    <StyledCheckboxWrapper data-testid="multi-select" className="multi-select">
      {localOptions.map(({ content, name, checked = false }) => {
        return (
          <StyledCheckbox key={name} className={`${checked ? 'checkbox-checked' : ''} multi-select-option`}>
            <Checkbox
              disableRipple
              size="medium"
              key={name}
              label={content[0].value}
              checked={checked}
              onChange={handleOnChange(content[0].value)}
              name={name}
            />
          </StyledCheckbox>
        );
      })}
    </StyledCheckboxWrapper>
  );
};
