import Head from "next/head";
import Script from "next/script";
import { ReactNode, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { myTheme } from "../../styles/theme";
import Header from "../Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --vh: 100%;
   }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', sans-serif;
  }
  a {
    all: unset;
    cursor: pointer;
  }
  section {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
  }, []);
  return (
    <>
      <Head>
        <title>After Night</title>
        <meta
          name="description"
          content="직장인들을 위한 콜드브루 정기구독 서비스"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EXGLXT8ZD7"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EXGLXT8ZD7');`}
      </Script>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
