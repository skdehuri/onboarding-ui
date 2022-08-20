import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

export default function ThemeWrapper({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#664de5',
            },
        },
        typography: {
            fontFamily: "'Inter', sans-serif",
            h4: {
                fontSize: '2rem',
                color: '#151b28',
                fontWeight: '700',
            },
            label: {
                fontWeight: 'bold',
                fontSize: 18,
            },
            subtitle1: {
                color: '#5c6984',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
