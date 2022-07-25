import styled from "styled-components";
import { IBrand } from "../types/clayful";
import BrandBox from "./BrandBox";
import { TitleText, DescriptionText } from "./interfaces/TextInterfaces";

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

const Title = styled(TitleText)`
  margin-bottom: 30px;
`;

const Description = styled(DescriptionText)`
  margin-bottom: 15px;
`;

const BrandContainer = styled.div`
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media screen and (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface IBrandIntroductionProps {
  brand: IBrand[] | null;
}

const BrandIntroduction = ({ brand }: IBrandIntroductionProps) => {
  return (
    <Container>
      <TextContainer>
        <Title>물론, 맛도 챙겼어요</Title>
        <Description>콜드브루라고 맛이 없다는 것은 편견입니다.</Description>
        <Description>국내 유명 로스터리의 콜드브루를 만나보세요.</Description>
      </TextContainer>
      <BrandContainer>
        {brand &&
          brand.map((brand, index) => (
            <BrandBox key={`brand-box ${index}`} brand={brand} />
          ))}
      </BrandContainer>
    </Container>
  );
};

export default BrandIntroduction;
