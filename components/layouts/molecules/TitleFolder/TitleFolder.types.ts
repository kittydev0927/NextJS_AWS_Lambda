export enum TitleFolderVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}
export interface TitleFolderProps {
  title: string;
  variant?: TitleFolderVariant.Primary | TitleFolderVariant.Secondary;
  rightButton?: {
    name?: string;
    href: string;
  } | null;
  className?: string;
}
export interface TitleFolderStyleType {
  type: TitleFolderProps['variant'];
}
