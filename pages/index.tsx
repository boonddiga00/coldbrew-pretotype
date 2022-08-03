import type { GetStaticProps, NextPage } from "next";
import IntroHorizontal from "../components/IntroHorizontal";
import axios from "axios";
import { ICatalog, ICollection } from "../types/clayful";
import Button from "../components/interfaces/Button";
import styled from "styled-components";
import Section from "../components/interfaces/Section";
import {
  TitleText,
  DescriptionText,
} from "../components/interfaces/TextInterfaces";
import Collections from "../components/Collections";
import { useRouter } from "next/router";
import GoToEmail from "../components/GoToEmail";

const StartPage = styled.div`
  width: 100%;
  height: 100vh;
  height: ${({ theme }) => theme.vh100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ImageFullPage = styled.div<{ url?: string }>`
  width: 100vw;
  height: 100vh;
  height: ${({ theme }) => theme.vh100};
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

const Description = styled(DescriptionText)``;

const Home: NextPage<IGetStaticPropsRetrun> = ({ pages, collections }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/emailForm");
  };
  return (
    <>
      <Section verticalPadding="30px">
        <GoToEmail title={pages?.title} description={pages?.description} />
      </Section>
      <Section verticalPadding="30px">
        <StartPage>
          {pages?.items[0].description.split("\\n").map((string, index) => (
            <Description key={`start-page ${index}`}>{string}</Description>
          ))}
        </StartPage>
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
