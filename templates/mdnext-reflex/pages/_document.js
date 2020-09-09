import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head></Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
