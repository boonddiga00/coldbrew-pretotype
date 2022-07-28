import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
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

const ChooseBox = styled.label`
  position: relative;
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
  register: UseFormRegister<FieldValues>;
  name: "roastery" | "caffeine" | "routine";
  stringContent?: string[];
  brand?: IBrand[] | null;
}

const ChooseType = ({
  children,
  register,
  name,
  stringContent,
  brand,
}: IChooseTypeProps) => {
  return (
    <Container>
      <TextContainer>{children}</TextContainer>
      {stringContent && (
        <FlexBox>
          {stringContent.map((content, index) => (
            <>
              <input
                {...register(name)}
                type="radio"
                value={content}
                id={`${name} ${index}`}
              />
              <ChooseBox htmlFor={`${name} ${index}`}>{content}</ChooseBox>
            </>
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
