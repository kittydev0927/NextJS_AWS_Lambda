import {
  AccessibleForward,
  Computer,
  FacebookRounded,
  Fence,
  Google,
  Home,
  HouseSiding,
  Instagram,
  LinkedIn,
  MicNone,
  Pool,
  SensorDoor,
} from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

export const DEFAULT_FONTS = {
  OpenSans: `'Open Sans',Helvetica,Arial,sans-serif`,
  Raleway: `'Raleway',sans-serif`,
  Roboto: `'Roboto',sans-serif`,
  RobotoCondensed: `'Roboto Condensed',sans-serif`,
  RobotoRegular: `'Roboto Regular',sans-serif`,
};

export const DEFAULT_COLORS = {
  teal: '#115667',
  lightGray: '#d2d2d2',
  gradientGray: '#e6e6e6',
  isabelline: '#f4f1eb',
  darkGray: '#3a383c',
  darkerGray: '#414042',
  chambray: '#3b5998',
  dodgerBlue: '#4384f6',
  silver: '#c4c4c4',
  accessibleGreen: '#168281',
  accessibleBlueGreen: '#115667',
  white: '#ffffff',
  orangeRed: '#e55d2d',
  gray: '#7f7f7f',
  genoa: '#115e67',
  mercury: '#e5e5e5',
  black: '#000000',
  lime: '#84bd00',
  green: '#29b19f',
  darkGreen: '#136069',
  lightGray2: '#a9a9a9',
  accessibleGray: '#757575',
  doveGray: '#6c6c6c',
  gray2: '#898989',
  dustyGray: '#979797',
  softPeach: '#f8f1f1',
  jade: '#279989',
  boxShadow: '#00000036',
  sliderGray: '#ededed',
  thunderbird: '#b61e1e',
  carbon: '#333333',
  haciendaWhite: '#f0ede7',
  mint: '#72cb70',
  selectiveYellow: '#ffb700',
  lightBlue: '#dce5e4',
  nightRider: '#303030',
  alto: '#d8d8d8',
  shipCove: '#7a8bbe',
  millbrook: '#55442c',
  mondo: '#4e3e30',
  gray91: '#e8e8e8',
  roofTerracotta: '#ad1d1d',
  persianGreen: '#009e8c',
  darkTangerine: '#f7b712',
  coral: '#f76157',
  graniteGray: '#676767',
  izamal: '#ebad08',
  caribbeanSwim: '#125D67',
  seaFantasy: '#1E998C',
};

export const FONTWEIGHT_VALUES = {
  thin: 100,
  regular: 400, // equivalent to "font-weight: normal"
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900,
};
export const DEFAULT_BORDER_RADIUS = {
  primary: '15px',
  secondary: '10px',
  small: '8px',
};

export const theme = createTheme({
  palette: {
    action: {
      disabledBackground: DEFAULT_COLORS.alto,
    },
    primary: {
      main: DEFAULT_COLORS.accessibleGreen,
    },
    secondary: {
      main: DEFAULT_COLORS.teal,
    },
  },
  typography: {
    fontFamily: DEFAULT_FONTS.Roboto,
    body1: {
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '14px',
      lineHeight: '22px',
      color: DEFAULT_COLORS.darkGray,
    },
    body2: {
      fontWeight: FONTWEIGHT_VALUES.medium,
      fontSize: '16px',
      lineHeight: '22px',
    },
    h1: {
      fontFamily: DEFAULT_FONTS.Raleway,
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '42px',
      color: DEFAULT_COLORS.darkGray,
    },
    h2: {
      fontFamily: DEFAULT_FONTS.Raleway,
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '40px',
      color: DEFAULT_COLORS.darkGray,
    },
    h3: {
      fontFamily: DEFAULT_FONTS.Raleway,
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '36px',
      color: DEFAULT_COLORS.darkGray,
    },
    h4: {
      fontFamily: DEFAULT_FONTS.Raleway,
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '32px',
      color: DEFAULT_COLORS.darkGray,
    },
    h5: {
      fontFamily: DEFAULT_FONTS.Raleway,
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '28px',
      color: DEFAULT_COLORS.darkGray,
    },
    h6: {
      fontFamily: DEFAULT_FONTS.Raleway,
      fontWeight: FONTWEIGHT_VALUES.regular,
      fontSize: '24px',
      color: DEFAULT_COLORS.darkGray,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
      styleOverrides: {
        sizeSmall: {
          fontSize: '14px',
        },
        sizeLarge: {
          fontSize: '16px',
        },
        root: {
          borderRadius: DEFAULT_BORDER_RADIUS.primary,
          color: DEFAULT_COLORS.white,
          fontFamily: DEFAULT_FONTS.Raleway,
          fontWeight: FONTWEIGHT_VALUES.semiBold,
          height: '50px',
          lineHeight: '22px',
          letterSpacing: '0.36px',
          textTransform: 'none',
          '&.Mui-disabled': {
            backgroundColor: DEFAULT_COLORS.alto,
          },
        },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: DEFAULT_COLORS.accessibleBlueGreen,
            '&:hover': {
              backgroundColor: DEFAULT_COLORS.accessibleBlueGreen,
              color: DEFAULT_COLORS.white,
            },
            '&.disabled': {
              backgroundColor: DEFAULT_COLORS.alto,
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: DEFAULT_COLORS.jade,
            '&:hover': {
              backgroundColor: DEFAULT_COLORS.jade,
              color: DEFAULT_COLORS.white,
            },
            '&.disabled': {
              backgroundColor: DEFAULT_COLORS.alto,
            },
          },
        },
        {
          props: { variant: 'inactive' },
          style: {
            backgroundColor: DEFAULT_COLORS.alto,
            '&:hover': {
              backgroundColor: DEFAULT_COLORS.alto,
              color: DEFAULT_COLORS.white,
            },
          },
        },
        {
          props: { variant: 'noBackground' },
          style: {
            backgroundColor: 'none',
            color: DEFAULT_COLORS.jade,
            '&:hover': {
              backgroundColor: 'none',
              color: DEFAULT_COLORS.jade,
            },
          },
        },
      ],
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          '& .MuiDialog-paper': {
            borderRadius: '12px',
            maxWidth: '700px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: DEFAULT_FONTS.Roboto,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          fontFamily: DEFAULT_FONTS.Raleway,
          color: DEFAULT_COLORS.darkGray,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: DEFAULT_COLORS.darkGray,
          fontSize: '20px',
          fontWeight: 600,
          padding: 'unset',
          margin: '10px 20px',
          minWidth: 'unset',
          '&&:first-child': {
            marginLeft: 0,
          },
          '&&:last-child': {
            marginRight: 0,
          },
          '&&.Mui-selected': {
            color: DEFAULT_COLORS.darkGray,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            backgroundColor: DEFAULT_COLORS.lime,
            height: '4px',
          },
          '& .MuiTabs-flexContainer': {
            borderBottom: `1px solid ${DEFAULT_COLORS.lightGray}`,
          },
        },
      },
    },
    // temporary checkbox styles until updated assets are ready
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: DEFAULT_COLORS.lime,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          '& .MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: DEFAULT_COLORS.isabelline,
          },
          '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
            backgroundColor: DEFAULT_COLORS.isabelline,
          },
          '& .MuiAutocomplete-option.Mui-focused': {
            backgroundColor: DEFAULT_COLORS.isabelline,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: DEFAULT_COLORS.darkGray,
        },
      },
    },
  },
  colors: DEFAULT_COLORS,
  fonts: DEFAULT_FONTS,
  fontWeight: FONTWEIGHT_VALUES,
  spacing: 8,
  borderRadius: DEFAULT_BORDER_RADIUS,
});

// Add custom box shadow to MUI theme
theme.shadows.push('21px 19px 40px 0 rgba(0, 0, 0, 0.09)');
export const muiCustomShadow = theme.shadows.length - 1;

export const BRAND_COLORS = [
  { name: 'ORANGE RED', hex: '#e55d2d', rgb: '229 93 45' },
  { name: 'WHITE', hex: '#ffffff', rgb: '255 255 255' },
  { name: 'Accessible Green', hex: '#168281', rgb: '22 130 129' },
  { name: 'TEAL', hex: '#115e67', rgb: '17 94 103' },
  { name: 'LIME', hex: '#84bd00', rgb: '132 189 0' },
  { name: 'MINT', hex: '#72cb70', rgb: '114 203 112' },
  { name: 'Accessible Blue/Green', hex: '#115667', rgb: '17 86 103' },
  { name: 'JADE', hex: '#279989', rgb: '39 153 137' },
  { name: 'Coral', hex: '#f76157', rgb: '247 97 87' },
  { name: 'DARK GREY', hex: '#3a383c', rgb: '58 56 60' },
  { name: 'Light Blue', hex: '#dce5e4', rgb: '220 229 228' },
  { name: 'Light Pink Background', hex: '#f8f1f1', rgb: '248 241 241' },
];

export const ICON_LIST = [
  {
    id: 1,
    name: 'Facebook',
    description: "import { FacebookRounded } from from '@mui/icons-material';",
    icon: FacebookRounded,
    type: 'SM',
  },
  {
    id: 2,
    name: 'Instagram',
    description: "import { Instagram } from from '@mui/icons-material';",
    icon: Instagram,
    type: 'SM',
  },
  {
    id: 3,
    name: 'Google Plus',
    description: "import { Google } from from '@mui/icons-material';",
    icon: Google,
    type: 'SM',
  },
  {
    id: 4,
    name: 'LinkedIn',
    description: "import { LinkedIn } from from '@mui/icons-material';",
    icon: LinkedIn,
    type: 'SM',
  },
  {
    id: 5,
    name: 'Fair Housing',
    description: "import { HouseSiding } from from '@mui/icons-material';",
    icon: HouseSiding,
    type: 'ADA',
  },
  {
    id: 6,
    name: 'Wheelchair',
    description: "import { AccessibleForward } from from '@mui/icons-material';",
    icon: AccessibleForward,
    type: 'ADA',
  },
  {
    id: 7,
    name: 'House',
    description: "import { Home } from from '@mui/icons-material';",
    icon: Home,
    type: 'WC',
  },
  {
    id: 8,
    name: 'Door Handle',
    description: "import { SensorDoor } from from '@mui/icons-material';",
    icon: SensorDoor,
    type: 'WC',
  },
  {
    id: 9,
    name: 'Mic',
    description: "import { MicNone } from from '@mui/icons-material';",
    icon: MicNone,
    type: 'WC',
  },
  {
    id: 10,
    name: 'Computer',
    description: "import { Computer } from from '@mui/icons-material';",
    icon: Computer,
    type: 'WC',
  },
  {
    id: 11,
    name: 'Fence',
    description: "import { Fence } from from '@mui/icons-material';",
    icon: Fence,
    type: 'WC',
  },
  {
    id: 12,
    name: 'Pool',
    description: "import { Pool } from from '@mui/icons-material';",
    icon: Pool,
    type: 'WC',
  },
];

// Allow design system consumers to access font settings but control how and
// where they load the font.
export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap&family=Roboto+Condensed:wght@700&display=swap&family=Roboto:wght@400;500;600;700&display=swap';
