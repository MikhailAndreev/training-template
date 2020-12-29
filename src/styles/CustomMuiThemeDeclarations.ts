import '@material-ui/core/styles/createPalette';

// Custom color
interface surface {
    HighEmphasis: string;
    MediumEmphasis: string;
    LowEmphasis: string;
    Background: string;
    Stroke: string;
    Filled: string;
    Disabled: string;
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

// Custom overrides declare
declare module '@material-ui/core/styles/overrides' {
    interface Theme {
        MuiAutocomplete: {
            root: any;
        };
        MuiPaginationItem: {
            root: any;
        };
    }

    interface ThemeOptions {
        MuiAutocomplete?: {
            root: any;
        };
        MuiPaginationItem?: {
            root: any;
        };
    }
}
