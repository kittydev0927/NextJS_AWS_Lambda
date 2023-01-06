export interface SharedComponentProps {
  data: DataObjectProps;
}

export interface DataObjectProps {
  id: string;
  text: string;
  richText: boolean;
  type: string;
  dataLayer?: object;
}
