export interface OrientationVideoProps {
  openModal?: boolean;
  termAccepted?: boolean;
  videoUrl?: string;
  onTermAccepted?: (isTermAccepted: boolean) => void;
}
