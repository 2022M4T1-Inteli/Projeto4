import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { theme } from 'styles/theme'
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
    const CustomFontTheme = createTheme({
        typography: {
          fontSize: 24
        },
        components: {
          MuiContainer: {
            styleOverrides: {
              root: {
                fontSize: 16
              }
            }
          }
        }
      });

    return (
        <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={CustomFontTheme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </MuiThemeProvider>
        </ThemeProvider>
    )
}

export default MyApp
