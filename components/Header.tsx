import Link from "next/link";
import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const Navigation = styled.nav`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled.li<{ logo?: true }>`
  list-style: none;
  font-size: ${(props) => (props.logo ? "20px" : "16px")};
  font-weight: ${(props) => (props.logo ? "500" : "700")};
  color: ${(props) => (props.logo ? "#000000" : "gray")};
  ${(props) => (props.logo ? "letter-spacing: 2px" : "")};
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <Container>
      <Navigation>
        <NavIcon logo>
          <Link href="/">
            <a>
              <Logo src="Logo_2.png" />
              AfterNight
            </a>
          </Link>
        </NavIcon>
        <NavIcon>
          <Link href="/subscribe">
            <a>구매과정 체험하기</a>
          </Link>
        </NavIcon>
      </Navigation>
    </Container>
  );
};

export default Header;
