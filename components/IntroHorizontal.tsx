import styled from "styled-components";
import { ICatagoryItem } from "../types/clayful";
import { TitleText, DescriptionText } from "./interfaces/TextInterfaces";

const Container = styled.div<{ isReverse: boolean }>`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
  align-items: center;
  height: 100vh;
  min-height: ${({ theme }) => theme.vh100};
  height: ${({ theme }) => theme.vh100};
  margin-bottom: 100px;
  gap: 20px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    div {
      width: 100%;
      height: 50%;
      align-items: flex-start;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;

const TextContainer = styled.div<{ isReverse: boolean }>`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1:nth-child(2) {
    margin-bottom: 10px;
  }
  h1:nth-child(3) {
    margin-top: -10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 380px) {
    h1 {
      width: 100%;
    }
  }
`;

const Title = styled(TitleText)<{ isReverse: boolean }>`
  text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  width: 70%;
  line-height: 1.5;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: left;
  }
`;

const Description = styled(DescriptionText)<{ isReverse: boolean }>`
  text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  width: 70%;
  line-height: 1.5;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: left;
  }
`;

interface IIntroHorizontalProps {
  reverse?: boolean;
  page?: ICatagoryItem;
}

const IntroHorizontal = ({ reverse, page }: IIntroHorizontalProps) => {
  const isReverse = reverse ? true : false;
  return (
    <Container isReverse={isReverse}>
      {page?.image && (
        <ImageContainer>
          <Image src={page?.image.url} alt={page?.title} title={page?.title} />
        </ImageContainer>
      )}
      <TextContainer isReverse={isReverse}>
        {page?.title.split("\\n").map((string, index) =>
          string.includes("&darr;") ? (
            <Title key={`title ${index}`} isReverse={isReverse}>
              {string.replace("&darr;", "")} &darr;
            </Title>
          ) : (
            <Title key={`title ${index}`} isReverse={isReverse}>
              {string}
            </Title>
          )
        )}
        {page?.description.split("\\n").map((string, index) => (
          <Description key={`description ${index}`} isReverse={isReverse}>
            {string}
          </Description>
        ))}
      </TextContainer>
    </Container>
  );
};

export default IntroHorizontal;
