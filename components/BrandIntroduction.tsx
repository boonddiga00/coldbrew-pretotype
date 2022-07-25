import styled from "styled-components";
import { IBrand } from "../types/clayful";
import BrandBox from "./BrandBox";
import Title from "./Title";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled(Title)`
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
`;

const BrandContainer = styled.div`
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

interface IBrandIntroductionProps {
  brand: IBrand[] | null;
}

const BrandIntroduction = ({ brand }: IBrandIntroductionProps) => {
  return (
    <Container>
      <TextContainer>
        <TitleText>물론, 맛도 챙겼어요</TitleText>
        <Description>콜드브루라고 맛이 없다는 것은 편견입니다.</Description>
        <Description>국내 유명 로스터리의 콜드브루를 만나보세요.</Description>
      </TextContainer>
      <BrandContainer>
        {brand &&
          brand.map((brand, index) => <BrandBox key={index} brand={brand} />)}
      </BrandContainer>
    </Container>
  );
};

export default BrandIntroduction;
