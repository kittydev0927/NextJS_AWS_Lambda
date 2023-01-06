export interface SliderProps {
  value?: [number, number];
  disabled?: boolean;
  min?: number;
  max?: number;
  onChange?: (newValue: [number, number]) => void;
  valueLabeldisplay?: 'auto' | 'on' | 'off';
  width?: string; //width for the slider to render in main slider container
  getRangeValues?: React.Dispatch<React.SetStateAction<[number, number]>>;
}
