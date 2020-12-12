import { ThemeProvider } from '@emotion/react';
import { AuthProvider } from '../lib/auth';
import '../styles/globals.css';
import theme from '../styles/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};
export default App;
