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
  //   typography: {
  //     fontFamily: "'Ubuntu', sans-serif",
  //     h1: {},
  //     h2: {},
  //     h3: {},
  //     h4: {},
  //     h5: {},
  //     body1: {},
  //     body2: {},
  //     button: {},
  //     caption: {},
  //   },
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
