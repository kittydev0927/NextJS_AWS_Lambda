import { styled } from '@mui/material';

interface Props {
  hexCode?: string;
  mixCode?: string;
}

const shouldForwardProp = (prop: string | number | symbol) => prop !== 'hexCode' && prop !== 'mixCode';
const options = { shouldForwardProp };

export const StyledColorContainer = styled('div')`
  width: 50%;
`;
export const StyledAnotherContainer = styled('div')`
  margin: 4rem;

  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ColorListItem = styled('li')`
  width: 100%;
  margin-bottom: 1%;
  padding: 1em;
  border: 1px solid #e5e5e5;
  list-style-type: none;
`;

export const ColorListContainer = styled('div')`
  display: flex;
  page-break-inside: avoid;
  break-inside: avoid-column;
  flex-wrap: wrap;
  height: 100%;
`;

export const ColorBlock = styled('div', options)`
  width: 3.5em;
  height: 100%;
  margin-top: 0em;
  margin-right: 1em;
  border-radius: 3px;
  background-color: ${(p: Props) => p.hexCode};
`;

export const ColorDetailsContainer = styled('div')`
  width: 30%;
  font-size: 0.7em;
  line-height: 2em;
  h4 {
    margin-bottom: 0.5em;
  }
  ul {
    list-style-type: none;
    display: block;
  }
`;

export const ColorBlendsContainer = styled('div')`
  display: flex;
  font-size: 0.7em;
  width: 100%;
`;

export const ColorBlendBlock = styled('div', options)`
  width: 20px;
  height: 20px;
  margin-top: 1px;
  margin-right: 1em;
  margin-bottom: 1px;
  border-radius: 3px;
  background: ${(p: Props) => p.mixCode};
`;

export const ColorBlendTitleContainer = styled('div')`
  margin-top: 2px;
  line-height: 20px;
`;

export const ColorBlendSpan = styled('span')`
  display: inline-block;
  margin-right: 1em;
`;

export const ColorBlendList = styled('ul')`
  line-height: 1.5em;
  display: flex;
  list-style-type: none;
`;
