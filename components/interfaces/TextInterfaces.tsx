import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 36px;
  font-weight: 700;
  @media screen and (max-width: 950px) {
    font-size: 30px;
  }
`;

const DescriptionText = styled.p`
  font-size: 24px;
  @media screen and (max-width: 950px) {
    font-size: 20px;
  }
  @media screen and (max-width: 430px) {
    font-size: 14px;
  }
`;

export { TitleText, DescriptionText };
