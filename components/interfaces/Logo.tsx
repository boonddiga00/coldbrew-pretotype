import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
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
