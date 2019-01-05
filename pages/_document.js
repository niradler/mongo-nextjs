import htmlescape from 'htmlescape';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";

class MyDocument extends Document {
    static async getInitialProps(props) { 
        return {}
      }

   render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400:latin"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
        <CssBaseline />
          <Main />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: `__ENV__ = ${htmlescape(process.env.NODE_ENV || 'dev')}` }} />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;