import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'theme-ui';
import base from '@reflexjs/preset-base';
import Navbar from '@components/Navbar';
import icons from '@reflexjs/icons-feather';

export default function App({ Component, pageProps }) {
  const theme = {
    ...base,
    icons: {
      ...icons,
    },
  };

  return (
    <>
      <DefaultSeo
        title="Nextjs + MDX Starter pack"
        description="This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI"
        url="www.whatever.com"
        ogImage={{
          url: 'www.whatever.com',
          title: 'OG Image title',
          description: 'Describe the OG image',
          image: ``,
          siteName: 'Your site name',
        }}
        twitter={{
          handle: '@domitriusclark',
          site: 'https://twitter.com/domitriusclark',
        }}
      />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
