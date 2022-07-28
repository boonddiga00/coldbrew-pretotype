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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>After Night</title>
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
