import { ThemeProvider } from 'next-themes';

interface ComponentProps{
    Component: any,
    pageProps: any
}

function MyApp({ Component, pageProps }:ComponentProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;