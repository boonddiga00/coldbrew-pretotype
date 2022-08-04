import { motion } from "framer-motion";
import styled from "styled-components";
import { ICatagoryItem } from "../types/clayful";
import ScrollDown from "./ScrollDown";

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  height: ${({ theme }) => theme.vh100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: ${(props) => props.theme.orangeColor};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  @media screen and (max-width: 950px) {
    font-size: 30px;
  }
`;

interface IStartPageProps {
  page?: ICatagoryItem;
}

const StartPage = ({ page }: IStartPageProps) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <TitleContainer>
          {page?.title.split("\\n").map((string, index) => (
            <Title key={`start-page ${index}`}>{string}</Title>
          ))}
        </TitleContainer>
        <ScrollDown />
      </motion.div>
    </Container>
  );
};

export default StartPage;
