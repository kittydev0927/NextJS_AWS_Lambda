export interface DocumentRowProps {
  row: {
    [key: string]: string;
    document: string;
    type: string;
    size: string;
    category: string;
    download: string;
  };
}
