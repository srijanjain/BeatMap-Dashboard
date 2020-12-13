import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { AuthProvider } from '@/lib/auth';
import '@/styles/globals.css';
import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
      <GlobalStyle/>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};
export default App;
