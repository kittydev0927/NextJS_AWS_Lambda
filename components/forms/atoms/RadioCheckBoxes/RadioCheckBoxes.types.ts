export interface RadioCheckBoxesProps {
  title?: string;
  options: string[];
  row: boolean;
  checkedIndex: number | null;
  setCheckedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
