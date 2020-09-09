import SEO from '@components/SEO';

export function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      {children}
    </>
  );
}
