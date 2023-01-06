export interface DividerProps {
  variant?: 'fullWidth' | 'inset' | 'middle';
  orientation?: 'horizontal' | 'vertical';
  textAlign?: 'center' | 'left' | 'right';
  dividerStyles?: Record<string, unknown>;
  customText?: string;
}
