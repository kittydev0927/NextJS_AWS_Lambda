export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

export interface IFileExplorerLinkProps {
  linkText?: string;
  linkName?: string;
  icon?: string | StaticImport;
  onChange?: () => void;
  setValue?: React.Dispatch<React.SetStateAction<File | undefined>>;
}
