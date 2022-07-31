import type { GetStaticProps, NextPage } from "next";
import IntroHorizontal from "../components/IntroHorizontal";
import axios from "axios";
import { ICatalog, ICollection } from "../types/clayful";
import Button from "../components/interfaces/Button";
import styled from "styled-components";
import Section from "../components/interfaces/Section";
import Link from "next/link";
import {
  TitleText,
  DescriptionText,
} from "../components/interfaces/TextInterfaces";
import Collections from "../components/Collections";
import { useRouter } from "next/router";

const GoToSubscribe = styled.div`
  width: 100%;
  height: 100vh;
  height: ${({ theme }) => theme.vh100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  a {
    font-size: 20px;
    color: ${(props) => props.theme.orangeColor};
    @media screen and (max-width: 430px) {
      font-size: 14px;
    }
  }
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
  position: absolute;
  left: 0;
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
        <GoToSubscribe>
          <Title color="#000000">{pages?.title}</Title>
          <Description>{pages?.description}</Description>
          <Links>
            <Link href="/emailForm">
              <a>이메일 적고 혜택 받아가기 &rarr;</a>
            </Link>
          </Links>
        </GoToSubscribe>
      </Section>
      <Section verticalPadding="30px">
        <IntroHorizontal page={pages?.items[0]} />
        <IntroHorizontal page={pages?.items[1]} reverse />
        {collections && (
          <Collections collections={collections} page={pages?.items[2]} />
        )}
        <IntroHorizontal page={pages?.items[3]} />
      </Section>
      <Section>
        <ImageFullPage url={pages?.items[4].image?.url}>
          {pages?.items[4].title.split("\\n").map((string, index) => (
            <Title color="#ffffff" key={`fullpage-title ${index}`}>
              {string}
            </Title>
          ))}
          <Button onClick={onClick} text="혜택 받기" />
        </ImageFullPage>
      </Section>
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
      revalidate: 10,
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
