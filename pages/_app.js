import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <SSRProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Fragment>
  );
}
export default MyApp;
