Unable to get this test case to run due to issues with Swiper
Reference to come...

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import type { PropertyCardProps } from '../PropertyCard/PropertyCard.types';
import { PropertyCardPanel } from './PropertyCardPanel';

const mockHandleOnClickNext = jest.fn();
jest.mock('./PropertyCardPanel', () => {
const originalModule = jest.requireActual('./PropertyCardPanel');

return {
\_\_esModule: true,
...originalModule,
handleOnClickNext: () => mockHandleOnClickNext(),
onCLickPrev: jest.fn(() => 'mocked click prev'),
};
});

Object.defineProperty(window, 'matchMedia', {
writable: true,
value: jest.fn().mockImplementation(query => ({
matches: false,
media: query,
onchange: null,
addListener: jest.fn(),
removeListener: jest.fn(),
addEventListener: jest.fn(),
removeEventListener: jest.fn(),
dispatchEvent: jest.fn(),
})),
});

describe('PropertyCardPanel', () => {
const desc = 'Complete your profile to help us serve a list of curated homes that are the best fit for your needs';
const properties = [
{
mapTypeCard: false,
information: {
price: 2350,
statuses: ['moveInNow', 'specialOffer', 'smartHome'],
bedroom: 4,
bathroom: 2.5,
address: {
title: '4367 Newton Lane, Ellenwood, GA 30294',
href: '/',
},
},
favorite: true,
image: {
src: 'https://photos.zillowstatic.com/fp/3b374a5f19ca4e7f9cf864310222bb3d-p_e.jpg',
alt: 'alt example',
},
labelStatus: 'moveInReady',
},
{
mapTypeCard: false,
information: {
price: 2350,
statuses: ['moveInNow', 'specialOffer', 'smartHome'],
bedroom: 4,
bathroom: 2.5,
address: {
title: '4367 Newton Lane, Ellenwood, GA 30294',
href: '/',
},
},
favorite: true,
image: {
src: 'https://photos.zillowstatic.com/fp/45d3e00942ddd838338950ba2ef3301e-cc_ft_960.jpg',
alt: 'alt example',
},
labelStatus: 'moveInReady',
},
{
mapTypeCard: false,
information: {
price: 2350,
statuses: ['moveInNow', 'specialOffer', 'smartHome'],
bedroom: 4,
bathroom: 2.5,
address: {
title: '4367 Newton Lane, Ellenwood, GA 30294',
href: '/',
},
},
favorite: true,
image: {
src: 'https://photos.zillowstatic.com/fp/5998754846dd7877f7921af7cb7efe63-cc_ft_960.jpg',
alt: 'alt example',
},
labelStatus: 'moveInReady',
},
{
mapTypeCard: false,
information: {
price: 2350,
statuses: ['moveInNow', 'specialOffer', 'smartHome'],
bedroom: 4,
bathroom: 2.5,
address: {
title: '4367 Newton Lane, Ellenwood, GA 30294',
href: '/',
},
},
favorite: true,
image: {
src: 'https://photos.zillowstatic.com/fp/45d3e00942ddd838338950ba2ef3301e-cc_ft_960.jpg',
alt: 'alt example',
},
labelStatus: 'moveInReady',
},
] as PropertyCardProps[];
beforeEach(() => {
render(
<PropertyCardPanel title="Recommended For You" linkText="View All" description={desc} properties={properties} />,
);
});
it('renders the PropertyCardPanel', () => {
expect(screen.getByText(/recommended for you/i)).toBeInTheDocument();
});
it('renders the link text', () => {
expect(screen.getByText(/view all/i)).toBeInTheDocument();
});
it('clicks pagination buttons', () => {
const prevbutton = screen.getByLabelText(/previous slide/i);
fireEvent.click(prevbutton);

    const nextbutton = screen.getByLabelText(/Next slide/i);
    fireEvent.click(nextbutton);
    // expect(mockHandleOnClickNext).toHaveBeenCalled();

});
});
