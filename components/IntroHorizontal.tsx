import styled from "styled-components";
import { ICatagoryItem } from "../types/clayful";
import Title from "./Title";

const Container = styled.div<{ isReverse: boolean }>`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
  align-items: center;
  height: 100vh;
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
    margin-bottom: 20px;
  }
`;

const TitleText = styled(Title)<{ isReverse: boolean }>`
  text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  width: 70%;
  line-height: 1.5;
`;

const Description = styled.p<{ isReverse: boolean }>`
  text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  width: 70%;
  font-size: 24px;
  line-height: 1.5;
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
          <Image src={page?.image.url} />
        </ImageContainer>
      )}
      <TextContainer isReverse={isReverse}>
        {page?.title.split("\\n").map((string, index) => (
          <TitleText key={`title ${index}`} isReverse={isReverse}>
            {string}
          </TitleText>
        ))}
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
