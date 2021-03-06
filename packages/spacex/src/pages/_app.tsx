import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { useApollo } from '../graphql/nextApollo';

interface AppProps {
  Component: React.ReactElement;
  pageProps: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
