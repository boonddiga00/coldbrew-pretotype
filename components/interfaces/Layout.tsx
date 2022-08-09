import Head from "next/head";
import { useRouter } from "next/router";
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
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
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
  const router = useRouter();
  const titleString = () => {
    switch (router.pathname) {
      case "/":
        return "AfterNight";
      case "/emailForm":
        return "AfterNight | 이메일 입력";
      case "/thankyou":
        return "AfterNight | Thank You";
      default:
        return "AfterNight";
    }
  };
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Head>
        <title>{titleString()}</title>
        <meta
          name="description"
          property="og:description"
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
