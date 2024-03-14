import React                        from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

interface props {
    children?: React.ReactNode;
}

let theme = createTheme({
    palette   : {
        primary  : {
            main        : '#c0045f',
            contrastText: '#000000'
        },
        secondary: {
            main        : '#eba832',
            contrastText: '#ffffff'
        },
        action   : {
            disabled: '#ffffff',
        }
    },
    typography: {
        fontFamily: 'Poppins, sans-serif !important',
        button: {
            textTransform: 'none',
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            }
        }
    }
});

function AppThemeProvider({children}: props) {
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export default AppThemeProvider;