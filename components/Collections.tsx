import styled from "styled-components";
import { ICatagoryItem, ICollection } from "../types/clayful";
import CollectionBox from "./CollectionBox";
import { DescriptionText, TitleText } from "./interfaces/TextInterfaces";

const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
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
  margin-bottom: 15px;
`;

const Description = styled(DescriptionText)`
  margin-bottom: 15px;
`;

const CollectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: 700px) {
    gap: 10px;
  }
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

interface ICollectionsProps {
  collections: ICollection[];
  page?: ICatagoryItem;
}

const Collections = ({ collections, page }: ICollectionsProps) => {
  return (
    <Container>
      <TextContainer>
        {page?.title.split("\\n").map((string, index) => (
          <Title key={`title ${index}`}>{string}</Title>
        ))}
        {page?.description.split("\\n").map((string, index) => (
          <Description key={`description ${index}`}>{string}</Description>
        ))}
      </TextContainer>
      <CollectionContainer>
        {collections &&
          collections
            .reverse()
            .map((collection, index) => (
              <CollectionBox
                key={`colletion-box ${index}`}
                collection={collection}
              />
            ))}
      </CollectionContainer>
    </Container>
  );
};

export default Collections;
