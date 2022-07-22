import styled from "styled-components";

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
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  background-color: blue;
`;

const TextContainer = styled.div<{ isReverse: boolean }>`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1<{ isReverse: boolean }>`
  text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  width: 70%;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const Description = styled.p<{ isReverse: boolean }>`
  text-align: ${({ isReverse }) => (isReverse ? "right" : "left")};
  width: 70%;
  font-size: 24px;
  line-height: 1.5;
`;

interface IPageWithImageProps {
  reverse?: true;
  page: {
    image: string;
    title: string;
    description: string;
  };
}

const PageWithImage = ({ reverse, page }: IPageWithImageProps) => {
  const isReverse = reverse ? true : false;
  return (
    <Container isReverse={isReverse}>
      <ImageContainer>
        <Image src={page.image} />
      </ImageContainer>
      <TextContainer isReverse={isReverse}>
        <Title isReverse={isReverse}>
          {page.title.split("\n").map((string) => (
            <>
              {string}
              <br />
            </>
          ))}
        </Title>
        <Description isReverse={isReverse}>
          {" "}
          {page.description.split("\n").map((string) => (
            <>
              {string}
              <br />
            </>
          ))}
        </Description>
      </TextContainer>
    </Container>
  );
};

export default PageWithImage;
