import type { AppProps } from "next/app";
import "../styles/app.css";
import GlobalStyle from "../styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "../src/components/MainNavbar";
import Layout from "../src/components/Layouts";
import { client } from "../src/apollo";
import React from "react";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
