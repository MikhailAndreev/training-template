import { createMuiTheme } from '@material-ui/core';
import '@material-ui/core/styles/createPalette';

interface surface {
  HighEmphasis: string;
  MediumEmphasis: string;
  LowEmphasis: string;
  Background: string;
  Stroke: string;
  Filled: string;
  Disabled: string;
  Light: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    surface: Partial<surface>;
    prim: Palette['grey'];
  }
  interface PaletteOptions {
    surface: Partial<surface>;
    prim: PaletteOptions['grey'];
  }
}

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      // @ts-ignore
      xxs: 0,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  palette: {
    primary: { main: '#18A6F5' },
    secondary: { main: '#939CAB' }, // посмотрел в ЦДС
    //Object literal may only specify known properties, and 'prim' does not exist in type 'PaletteOptions'
    prim: {
      50: '#F6FAFC',
      100: '', // ?????
      200: '',
      300: '',
      400: '#3BB3F7',
      500: '18A6F5',
      600: '#159EF4',
      700: '',
      800: '',
      900: '',
    },
    surface: {
      HighEmphasis: '#001333',
      MediumEmphasis: '#3B4961',
      LowEmphasis: '#939CAB',
      Background: 'F6FAFC', // посмотрел в ЦДС
      Stroke: '#C9DEE8',
      Filled: '#B4C8D1',
      Disabled: '#C2C6CB',
    },
    error: { main: '#ED2D23' }, // взял из ui-kit
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    h1: {
      fontWeight: 300,
      fontSize: 40,
      lineHeight: '52px',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: '38px',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 300,
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '28px',
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '26px',
      letterSpacing: '-0.01em',
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
      lineHeight: '24px',
    },
    body2: {
      fontWeight: 500,
      fontSize: 15,
      lineHeight: '24px',
    },
    button: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '16px',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
    },
    caption: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '16px',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          minWidth: 375,
          backgroundColor: '#fff !important',
        },
        main: {
          flex: '1 0 auto',
        },
        '#root': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '.router-link': {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      root: {
        height: 48,
        padding: '0 12px',
        borderRadius: '4px',
      },
      contained: {}, // вопрос почему на цдс белый bg и синий цвет ????
      containedPrimary: {
        color: '#fff',
        backgroundColor: '#18A6F5',
        boxShadow: 'none',
        '&:hover': {},
      },
      outlined: {},
      outlinedPrimary: {
        border: '2px solid #18A6F5',
        backgroundColor: 'transparent',
        '&:hover': {
          border: '2px solid #18A6F5',
        },
      },
      text: {
        backgroundColor: 'transparent',
        transition: 'all .4s ease',
        '&:hover': {
          color: '#18A6F5',
          backgroundColor: 'transparent',
        },
      },
      textPrimary: {
        color: '#18A6F5',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
      textSecondary: {
        color: '#939CAB',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
    },

    MuiPaper: {
      outlined: {
        border: '1px solid #C9DEE8',
      },
    },
    MuiFormLabel: {
      root: {
        display: 'block',
        fontSize: 11,
        lineHeight: '16px',
        fontWeight: 500,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        marginBottom: 8,
      },
    },

    MuiInputBase: {
      input: {
        padding: '16px',
      },
    },

    MuiOutlinedInput: {
      root: {
        height: '56px',
        background: '#F6FAFC',
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#18A6F5',
        },
      },

      input: {
        padding: '16px',
      },
      notchedOutline: {
        borderColor: '#C9DEE8',
      },
    },
    // @ts-ignore
    MuiToggleButtonGroup: {
      root: {
        backgroundColor: '#F6FAFC',
      },
    },
    MuiToggleButton: {
      root: {
        fontSize: '13px',
        lineHeight: '16px',
        color: '#001333',
        borderRadius: 4,
        fontWeight: 400,
        textTransform: 'none',
        borderColor: '#C9DEE8',
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, .4)',
        },
        '&.Mui-selected': {
          color: '#FFFFFF',
          borderColor: '#18A6F5',
          backgroundColor: '#18A6F5',
          zIndex: 1,
          '&.Mui-selected:hover': {
            backgroundColor: '#18A6F5',
          },
        },
      },
    },

    MuiAccordion: {
      root: {
        border: '1px solid #C9DEE8',
        boxShadow: 'none',
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '10px 62px',
      },
    },
    MuiAccordionSummary: {
      root: {
        height: 66,
        padding: '0 62px',
      },
      content: {
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },

    MuiTableHead: {
      root: {
        textTransform: 'uppercase',
        backgroundColor: '#F6FAFC',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid #C9DEE8',
      },
      head: {
        color: '#3B4961',
        fontWeight: 500,
        fontSize: 11,
        lineHeight: '16px',
        padding: '14px 12px',
        whiteSpace: 'nowrap',
      },
      body: {
        fontWeight: 400,
        padding: 12,
        borderBottom: 'none',
      },
    },

    MuiPaginationItem: {
      root: {
        fontSize: 13,
        fontWeight: 500,
        lineHeight: '16px',
        width: 48,
        height: 48,
        margin: '0 8px',
      },
      page: {
        '&.Mui-selected': {
          color: '#fff',
          borderColor: '#18A6F5',
          backgroundColor: '#18A6F5',
          '&:hover': {
            borderColor: '#3BB3F7 !important',
            backgroundColor: '#3BB3F7 !important',
          },
        },
      },
      ellipsis: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        border: '1px solid #C9DEE8',
        borderRadius: 4,
      },
      outlined: {
        border: '1px solid #C9DEE8',
      },
    },

    MuiAutocomplete: {
      root: {
        '& .MuiAutocomplete-tag': {
          height: 40,
          margin: '3px 6px',
          borderRadius: 4,
          border: '1px solid #C9DEE8',
          backgroundColor: '#F6FAFC',
          '& .MuiChip-label': {
            fontWeight: 400,
            fontSize: 13,
            lineHeight: '16px',
            letterSpacing: '.03333em',
          },
        },
        '& .MuiOutlinedInput-root': {
          height: 56,
          padding: '5px 18px !important',
        },
      },
      endAdornment: {
        right: '18px !important',
        '& .MuiIconButton-root': {
          color: '#B4C8D1',
          '&:hover': {
            color: '#939CAB',
          },
        },
      },
    },
  },
});
