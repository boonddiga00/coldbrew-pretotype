import styled from "styled-components";

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const LogoText = styled.span`
  font-size: 20px;
`;

const Logo = () => {
  return (
    <Container>
      <LogoIcon src="Logo_2.png" />
      <LogoText>AfterNight</LogoText>
    </Container>
  );
};

export default Logo;
