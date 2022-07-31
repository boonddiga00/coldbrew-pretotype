import styled from "styled-components";
import { ICollection } from "../types/clayful";
import { DescriptionText, TitleText } from "./interfaces/TextInterfaces";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 1150px) and (min-width: 431px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 430px) {
    height: 100px;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 20px 20px;
  @media screen and (max-width: 1150px) and (min-width: 431px) {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    h1 {
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 430px) {
    width: 60%;
  }
`;

const Title = styled(TitleText)`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

const Description = styled(DescriptionText)`
  font-size: 12px;
  text-align: center;
  @media screen and (max-width: 430px) {
    padding-bottom: 5px;
  }
`;

const ThumnailContainer = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 1150px) and (min-width: 431px) {
    width: 100%;
    height: 50%;
  }
  @media screen and (max-width: 430px) {
    width: 40%;
  }
`;

const Thumnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface ICollectionBoxProps {
  collection: ICollection;
}

const CollectionBox = ({ collection }: ICollectionBoxProps) => {
  return (
    <Container>
      <TextContainer>
        <Title>{collection.name}</Title>
        {collection?.description.split("\\n").map((string, index) => (
          <Description key={`collection-description ${index}`}>
            {string}
          </Description>
        ))}
      </TextContainer>
      <ThumnailContainer>
        <Thumnail
          src={collection.thumbnail.url}
          alt={collection.name}
          title={collection.name}
        />
      </ThumnailContainer>
    </Container>
  );
};

export default CollectionBox;
