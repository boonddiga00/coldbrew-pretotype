import Head from "next/head";
import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    all: unset;
    cursor: pointer;
  }
  html {
    font-family: 'Roboto', sans-serif;
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
  return (
    <>
      <Head>
        <title>After Night</title>
        <meta
          name="description"
          content="직장인들을 위한 콜드브루 정기구독 서비스"
        />
      </Head>
      <main>
        <GlobalStyle />
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
