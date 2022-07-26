<<<<<<< HEAD
import { ReactNode, useRef, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
=======
import { ReactNode } from "react";
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)
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

<<<<<<< HEAD
const ChooseBox = styled.label`
  position: relative;
=======
const ChooseButton = styled.div`
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)
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
<<<<<<< HEAD
  register: UseFormRegister<FieldValues>;
  name: "roastery" | "caffeine" | "routine";
=======
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)
  stringContent?: string[];
  brand?: IBrand[] | null;
}

<<<<<<< HEAD
const ChooseType = ({
  children,
  register,
  name,
  stringContent,
  brand,
}: IChooseTypeProps) => {
=======
const ChooseType = ({ children, stringContent, brand }: IChooseTypeProps) => {
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)
  return (
    <Container>
      <TextContainer>{children}</TextContainer>
      {stringContent && (
        <FlexBox>
          {stringContent.map((content, index) => (
<<<<<<< HEAD
            <>
              <input
                {...register(name)}
                type="radio"
                value={content}
                id={`${name} ${index}`}
              />
              <ChooseBox htmlFor={`${name} ${index}`}>{content}</ChooseBox>
            </>
=======
            <ChooseButton key={`content ${index}`}>{content}</ChooseButton>
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)
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
