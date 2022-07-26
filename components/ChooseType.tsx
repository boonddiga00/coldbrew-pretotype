import { ReactNode } from "react";
import styled from "styled-components";
import { IBrand } from "../types/clayful";
import BrandBox from "./BrandBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  gap: 30px;
`;

const FlexBox = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const GridBox = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const ChooseButton = styled.div`
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`;

interface IChooseTypeProps {
  children: ReactNode;
  stringContent?: string[];
  brand?: IBrand[] | null;
}

const ChooseType = ({ children, stringContent, brand }: IChooseTypeProps) => {
  return (
    <Container>
      <TextContainer>{children}</TextContainer>
      {stringContent && (
        <FlexBox>
          {stringContent.map((content, index) => (
            <ChooseButton key={`content ${index}`}>{content}</ChooseButton>
          ))}
        </FlexBox>
      )}
      {brand && (
        <GridBox>
          {brand &&
            brand.map((brand) => <BrandBox key={brand._id} brand={brand} />)}
        </GridBox>
      )}
    </Container>
  );
};

export default ChooseType;
