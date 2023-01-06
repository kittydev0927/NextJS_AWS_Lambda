export interface IPropertyCardSummaryProps {
  header: string;
  image: {
    src: string;
    alt: string;
  };
  information: {
    price: number;
    bedroom: number;
    bathroom: number;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
    };
  };
}
