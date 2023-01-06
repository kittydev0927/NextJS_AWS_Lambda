import type { PropertyCardProps } from '#components/layouts/molecules/PropertyCard/PropertyCard.types';

export async function GetSavedHomes(): Promise<readonly PropertyCardProps[]> {
  return Promise.resolve([
    {
      propertyId: 'propertyId',
      mapTypeCard: false,
      information: {
        price: 2350,
        statuses: ['moveInNow'],
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
        alt: 'Newton Lane',
      },
      labelStatus: 'moveInReady',
    },
    {
      propertyId: 'propertyId',
      mapTypeCard: false,
      information: {
        price: 3970,
        statuses: ['moveInNow', 'specialOffer'],
        bedroom: 2,
        bathroom: 2,
        address: {
          title: '4368 Newton Lane, Ellenwood, GA 30294',
          href: '/',
        },
      },
      favorite: true,
      image: {
        src: 'https://photos.zillowstatic.com/fp/45d3e00942ddd838338950ba2ef3301e-cc_ft_960.jpg',
        alt: '4368 Newton Lane',
      },
      labelStatus: 'unavailable',
    },
    {
      propertyId: 'propertyId',
      mapTypeCard: false,
      information: {
        price: 4320,
        statuses: ['moveInNow', undefined, 'smartHome'],
        bedroom: 5,
        bathroom: 5,
        address: {
          title: '4467 Newton Lane, Ellenwood, GA 30294',
          href: '/',
        },
      },
      favorite: true,
      image: {
        src: 'https://photos.zillowstatic.com/fp/5998754846dd7877f7921af7cb7efe63-cc_ft_960.jpg',
        alt: '4467 Newton GA',
      },
      labelStatus: 'moveInReady',
    },
  ]);
}
