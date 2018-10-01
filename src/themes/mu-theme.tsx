import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            // contrastText: '',
            // dark: '',
            // light: '',
            main: '#92d400',
        },
        secondary: {
            // contrastText: '',
            // dark: '',
            // light: '',
            main:'#F5F5F5',
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
})

export default theme;
