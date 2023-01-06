export interface UpcomingTourProps {
  image: {
    src: string;
    alt: string;
  };
  date: {
    date: string;
    time: string;
  };
  address: {
    city: string;
    state: string;
  };
}
