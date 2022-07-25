import styled from "styled-components";
import { IBrand } from "../types/clayful";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  padding: 30px;
  @media screen and (max-width: 500px) {
    padding: 10px;
    height: 150px;
  }
`;

const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 50%;
`;

const BrandName = styled.h1`
  position: absolute;
  bottom: 30px;
  font-weight: 700;
  font-size: 12px;
`;

interface IBrandBoxProps {
  brand: IBrand;
}

const BrandBox = ({ brand }: IBrandBoxProps) => {
  return (
    <Container>
      <Logo src={brand.logo.url} />
      <BrandName>{brand.name}</BrandName>
    </Container>
  );
};

export default BrandBox;
