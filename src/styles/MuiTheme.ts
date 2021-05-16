import { createMuiTheme } from '@material-ui/core';

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
  //   palette: {
  //     primary: { main: '' },
  //     secondary: { main: '' },
  //     prim: {
  //       50: '',
  //       100: '',
  //       200: '',
  //       300: '',
  //       400: '',
  //       500: '',
  //       600: '',
  //       700: '',
  //       800: '',
  //       900: '',
  //     },
  //     surface: {
  //       HighEmphasis: '',
  //       MediumEmphasis: '',
  //       LowEmphasis: '',
  //       Background: '',
  //       Stroke: '',
  //       Filled: '',
  //       Disabled: '',
  //     },
  //     error: { main: '' },
  //   },
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
      text: {
        backgroundColor: 'transparent',
        transition: 'all .4s ease',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
      textPrimary: {
        color: '',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
      textSecondary: {
        color: '',
        '&:hover': {
          color: '',
          backgroundColor: 'transparent',
        },
      },
    },
  },
});
