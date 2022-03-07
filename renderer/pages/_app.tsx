import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { Flex, Heading } from "@chakra-ui/react";
import  Navbar  from '../components/navbar'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme(
  {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f7fafc",
        // ...
        800: "#222",
        900: "#222",
      },
      // ...
    },
    
  }
)

export default function(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <IntlProvider locale="pt-BR">
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Navbar/>
        <Component {...pageProps} />
      </ChakraProvider>
      </IntlProvider>

      
      {/* <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider> */}
    </React.Fragment>
  );
}
