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
    max-width: 1200px;
    margin: 0 auto;
  }
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <GlobalStyle />
      {children}
    </main>
  );
};

export default Layout;
