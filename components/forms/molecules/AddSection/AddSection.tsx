import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { TextField } from '#components/forms/atoms/TextField/TextField';
import AddIcon from '#public/add-icon.svg';

import {
  StyledAddButton,
  StyledDatePicker,
  StyledFieldsSection,
  StyledFieldTitle,
  StyledGridButton,
  StyledGridContainer,
  StyledGridField,
  StyledSection,
} from './AddSection.styles';
import type { AddChildProps, AddSectionProps } from './AddSection.types';

const ChildComponent: React.FC<AddChildProps> = ({
  dateValues,
  setDateValues,
  keyIndex,
  options,
  fieldText,
  removeText,
  onClickRemove,
}) => {
  const onChange = (newValue: Date | null, index: number) => {
    const newValues = dateValues.map((value: Date | null, i: number) => {
      return i === index ? newValue : value;
    });
    setDateValues(newValues);
  };

  const getFields = (label: string, type: string, key: number) => {
    switch (type) {
      case 'textbox': {
        return (
          <TextField
            placeholder={label}
            id={label + '-id'}
            name={label.replace(/\s/g, '')}
            data-testid={label + '-input'}
            fullWidth
            label={label}
            key={label + '-' + String(key)}
          />
        );
      }
      case 'date': {
        return (
          <StyledDatePicker
            label={label}
            key={label + '-' + String(key)}
            onChange={e => onChange(e, key)}
            value={dateValues[key]}
            onError={() => console.info('date picker error')}
          />
        );
      }
      default:
        break;
    }
  };

  const createInputFields = (key: number) => {
    const sectionItems = [];
    for (let i = 0, len = options.length; i < len; i += 1) {
      sectionItems.push(getFields(options[i].label, options[i].type, key));
    }
    return sectionItems;
  };

  const handleOnClickRemove = (index: number) => {
    onClickRemove(index);
  };

  return (
    <>
      <StyledGridContainer container>
        <StyledGridField item sm={6}>
          <StyledFieldTitle>
            {fieldText} {keyIndex}
          </StyledFieldTitle>
        </StyledGridField>
        <StyledGridButton item sm={6}>
          {keyIndex !== 1 && <Button onClick={() => handleOnClickRemove(keyIndex - 1)}>{removeText}</Button>}
        </StyledGridButton>
      </StyledGridContainer>
      <StyledFieldsSection key={keyIndex}>{createInputFields(keyIndex)}</StyledFieldsSection>
    </>
  );
};

export const AddSection: React.FC<AddSectionProps> = ({ options, buttonText, fieldText, removeText }) => {
  const [numChildren, setNumChildren] = useState(1);
  const [dateValues, setDateValues] = useState<(Date | null)[]>([]);
  const children: React.ReactElement[] = [];

  const handleClickRemove = (index: number) => {
    children.splice(index, 1);
    setNumChildren(count => count - 1);
  };

  useEffect(() => {
    setDateValues([...dateValues, null]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numChildren]);

  for (let i = 0; i < numChildren; i += 1) {
    const keyIndex = Number(i + 1);
    children.push(
      <ChildComponent
        key={keyIndex}
        dateValues={dateValues}
        setDateValues={setDateValues}
        keyIndex={keyIndex}
        options={options}
        fieldText={fieldText}
        removeText={removeText}
        onClickRemove={handleClickRemove}
      />,
    );
  }

  const addComponent = () => {
    setNumChildren(count => count + 1);
  };

  return (
    <>
      {children}
      <StyledSection data-testid="add-section" className="add-section" onClick={addComponent}>
        <StyledAddButton data-testid="add-section-button" className="add-section-button">
          {buttonText}
        </StyledAddButton>
        <span className={'addIcon'}>
          <Image src={AddIcon as string} width={12} height={11} alt={buttonText} />
        </span>
      </StyledSection>
    </>
  );
};
