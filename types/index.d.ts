import type { DEFAULT_BORDER_RADIUS, DEFAULT_COLORS, DEFAULT_FONTS, FONTWEIGHT_VALUES } from '#styles/styles';
interface CustomTheme {
  status?: {
    danger?: string;
  };
  colors: typeof DEFAULT_COLORS;
  fonts: typeof DEFAULT_FONTS;
  fontWeight: typeof FONTWEIGHT_VALUES;
  borderRadius: typeof DEFAULT_BORDER_RADIUS;
}
declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends CustomTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends CustomTheme {}
}
