import Link from "next/link";
import styled from "styled-components";
import { DescriptionText, TitleText } from "./interfaces/TextInterfaces";
import ScrollDown from "./ScrollDown";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: ${({ theme }) => theme.vh100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  a {
    font-size: 20px;
    color: ${(props) => props.theme.orangeColor};
    @media screen and (max-width: 430px) {
      font-size: 14px;
    }
  }
`;

const Title = styled(TitleText)``;

interface IGoToEmailProps {
  title?: string;
  description?: string;
}

const GoToEmail = ({ title, description }: IGoToEmailProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DescriptionText>{description}</DescriptionText>
      <Links>
        <Link href="/emailForm">
          <a>이메일 적고 혜택 받아가기 &rarr;</a>
        </Link>
      </Links>
      <ScrollDown />
    </Container>
  );
};

export default GoToEmail;
