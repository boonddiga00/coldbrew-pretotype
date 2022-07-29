import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { myTheme } from "../../styles/theme";
import Header from "../Header";

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
    max-width: 1200px;
    margin: 0 auto;
  }
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <Head>
        <title>After Night</title>
        <meta
          name="description"
          content="직장인들을 위한 콜드브루 정기구독 서비스"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={myTheme}>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
