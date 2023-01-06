import React from 'react';

import { BRAND_COLORS } from '#styles/styles';

import {
  ColorBlendBlock,
  ColorBlendList,
  ColorBlendsContainer,
  ColorBlendSpan,
  ColorBlendTitleContainer,
  ColorBlock,
  ColorDetailsContainer,
  ColorListContainer,
  ColorListItem,
  StyledAnotherContainer,
  StyledColorContainer,
} from './Colors.styles';

const colorBlend = [
  { id: 1, blend: 'ffffff', percentage: 75 },
  { id: 2, blend: 'ffffff', percentage: 50 },
  { id: 3, blend: 'ffffff', percentage: 25 },
  { id: 4, blend: '000000', percentage: 25 },
  { id: 5, blend: '000000', percentage: 50 },
  { id: 6, blend: '000000', percentage: 75 },
];

// From https://gist.github.com/jedfoster/7939513. Probably. Not sure.
const mix = function (color_1: string, color_2: string, weight: number) {
  const hexidecimal = 16;

  function d2h(d: number) {
    return d.toString(hexidecimal);
  }

  function h2d(h: string) {
    return parseInt(h, hexidecimal);
  }

  const defaultWeight = 50;
  /* istanbul ignore next */
  weight = weight || defaultWeight;

  let color = '#';

  // Justification: Pre-existing code. I don't know. This is why we would
  // want the no-magic-numbers rule. Is this supposed to be the six characters
  // that make up the three RGB values? I guess?
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  for (let i = 0; i <= 5; i += 2) {
    const v1 = h2d(color_1.substr(i, 2)),
      v2 = h2d(color_2.substr(i, 2));

    // Justification: Meaning is obvious.
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) {
      val = '0' + val;
    }
    color += val;
  }

  return color;
};

export const Colors = React.forwardRef<HTMLElement>(() => {
  const regularColors = Object.values(BRAND_COLORS);

  const colorList = (filterList: typeof regularColors) => {
    return filterList.map(color => (
      <ColorListItem key={color.name}>
        <ColorListContainer>
          <ColorBlock hexCode={color.hex} />
          <ColorDetailsContainer>
            <h4>{color.name}</h4>
            <ul>
              <li title="scss">{color.rgb}</li>
              <li title="hex">{color.hex}</li>
            </ul>
          </ColorDetailsContainer>

          <StyledColorContainer>
            {colorBlend.map(blend => (
              <ColorBlendsContainer key={blend.id}>
                <ColorBlendBlock mixCode={mix(blend.blend, color.hex.replace('#', ''), blend.percentage)} />
                <ColorBlendTitleContainer>
                  <ColorBlendSpan>
                    <ColorBlendList>
                      <li>{mix(blend.blend, color.hex.replace('#', ''), blend.percentage)}</li>
                    </ColorBlendList>
                  </ColorBlendSpan>
                </ColorBlendTitleContainer>
              </ColorBlendsContainer>
            ))}
          </StyledColorContainer>
        </ColorListContainer>
      </ColorListItem>
    ));
  };

  return (
    <StyledAnotherContainer data-testid="Colors-Container">
      <h3>Brand Colors</h3>
      <ul>{colorList(regularColors)}</ul>
    </StyledAnotherContainer>
  );
});

Colors.displayName = 'Colors';
