import type { AppProps } from "next/app";
import "../styles/app.css";
import GlobalStyle from "../styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "../src/components/MainNavbar";
import Layout from "../src/components/Layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
