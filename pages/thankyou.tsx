import { useRouter } from "next/router";
import styled from "styled-components";
import {
  DescriptionText,
  TitleText,
} from "../components/interfaces/TextInterfaces";

const Container = styled.div`
  min-height: ${({ theme }) => theme.vh100};
  height: ${({ theme }) => theme.vh100};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Description = styled(DescriptionText)`
  font-size: 18px;
`;

const GoHomeButton = styled.button`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.orangeColor};
  font-size: 20px;
`;

const Title = styled(TitleText)``;

const ThankYou = () => {
  const router = useRouter();
  return (
    <Container>
      <Title>감사합니다.</Title>
      <Description>답변이 성공적으로 저장되었습니다.</Description>
      <Description>서비스 출시 시 보내주신 이메일로 로그인 하시면</Description>
      <Description>구독 1년(12회) 10% 할인 쿠폰을 지급해드립니다!</Description>
      <GoHomeButton onClick={() => router.push("/")}>
        홈으로 돌아가기
      </GoHomeButton>
    </Container>
  );
};

export default ThankYou;
