import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
    padding: 0 30px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 120px;
  }
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
