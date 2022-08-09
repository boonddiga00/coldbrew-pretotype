import type { GetStaticProps, NextPage } from "next";
import IntroHorizontal from "../components/IntroHorizontal";
import axios from "axios";
import { ICatalog, ICollection } from "../types/clayful";
import Button from "../components/interfaces/Button";
import styled from "styled-components";
import Section from "../components/interfaces/Section";
import { TitleText } from "../components/interfaces/TextInterfaces";
import Collections from "../components/Collections";
import { useRouter } from "next/router";
import StartPage from "../components/StartPage";

const ImageFullPage = styled.div<{ url?: string }>`
  width: 100vw;
  height: 100vh;
  min-height: ${({ theme }) => theme.vh100};
  height: ${({ theme }) => theme.vh100};
  min-height: ${({ theme }) => theme.vh100};
  background-image: url(${(props) => props.url});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  object-fit: contain;
`;

const Title = styled(TitleText)<{ color: string }>`
  color: ${(props) => props.color};
`;

const Home: NextPage<IGetStaticPropsRetrun> = ({ pages, collections }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/emailForm");
  };
  return (
    <>
      <StartPage page={pages?.items[0]} />
      <Section verticalPadding="30px">
        <IntroHorizontal page={pages?.items[1]} />
        <IntroHorizontal page={pages?.items[2]} reverse />
        {collections && (
          <Collections collections={collections} page={pages?.items[3]} />
        )}
        <IntroHorizontal page={pages?.items[4]} />
      </Section>
      <ImageFullPage url={pages?.items[5].image?.url}>
        {pages?.items[5].title.split("\\n").map((string, index) => (
          <Title color="#ffffff" key={`fullpage-title ${index}`}>
            {string}
          </Title>
        ))}
        <Button onClick={onClick} text="혜택 받기" />
      </ImageFullPage>
    </>
  );
};

interface IGetStaticPropsRetrun {
  pages: ICatalog | null;
  collections: ICollection[] | null;
}

export const getStaticProps: GetStaticProps<
  IGetStaticPropsRetrun
> = async () => {
  try {
    const catalogPayload = await axios.get<ICatalog>(
      "https://api.clayful.io/v1/catalogs/4EKD3837F7MY",
      {
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          Authorization: `Bearer ${process.env.CLAYFUL_TOKEN}`,
        },
      }
    );
    const collectionsPayload = await axios.get<ICollection[]>(
      "https://api.clayful.io/v1/collections",
      {
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          Authorization: `Bearer ${process.env.CLAYFUL_TOKEN}`,
        },
      }
    );
    return {
      props: {
        pages: catalogPayload.data,
        collections: collectionsPayload.data,
      },
      revalidate: 20,
    };
  } catch (e) {
    return {
      props: {
        pages: null,
        collections: null,
      },
    };
  }
};

export default Home;
