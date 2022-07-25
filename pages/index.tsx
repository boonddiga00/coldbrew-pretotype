import type { GetStaticProps, NextPage } from "next";
import IntroHorizontal from "../components/IntroHorizontal";
import axios from "axios";
import { IBrand, ICatagoryItem, ICatalog } from "../types/clayful";
import BrandIntroduction from "../components/BrandIntroduction";
import Button from "../components/Button";
import styled from "styled-components";
import Section from "../components/Section";
import Link from "next/link";
import Title from "../components/Title";

const GoToSubscribe = styled.div`
  width: 100%;
  height: 100vh;
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
  justify-content: space-between;
  width: 250px;
  a {
    font-size: 20px;
    color: #ff6b00;
  }
`;

const ImageFullPage = styled.div<{ url?: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.url});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: absolute;
  left: 0;
`;

const TitleText = styled(Title)<{ color: string }>`
  color: ${(props) => props.color};
`;

const Description = styled.p`
  font-size: 24px;
`;

const Home: NextPage<IGetStaticPropsRetrun> = ({ pages, brand }) => {
  return (
    <>
      <Section verticalPadding="30px">
        <GoToSubscribe>
          <TitleText color="#000000">{pages?.title}</TitleText>
          <Description>{pages?.description}</Description>
          <Links>
            <Link href="#">
              <a>더 알아보기</a>
            </Link>
            <Link href="#">
              <a>구매하기</a>
            </Link>
          </Links>
        </GoToSubscribe>
      </Section>
      <Section verticalPadding="30px">
        <IntroHorizontal page={pages?.items[0]} />
        <IntroHorizontal page={pages?.items[1]} reverse />
        <BrandIntroduction brand={brand} />
        <IntroHorizontal page={pages?.items[2]} />
      </Section>
      <Section>
        <ImageFullPage url={pages?.items[3].image?.url}>
          {pages?.items[3].title.split("\\n").map((string, index) => (
            <TitleText color="#ffffff" key={`fullpage-title ${index}`}>
              {string}
            </TitleText>
          ))}
          <Button text="정기구독하기" />
        </ImageFullPage>
      </Section>
    </>
  );
};

interface IGetStaticPropsRetrun {
  pages: ICatalog | null;
  brand: IBrand[] | null;
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
    const brandPayload = await axios.get<IBrand[]>(
      "https://api.clayful.io/v1/brands",
      {
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          Authorization: `Bearer ${process.env.CLAYFUL_TOKEN}`,
        },
      }
    );
    return {
      props: { pages: catalogPayload.data, brand: brandPayload.data },
    };
  } catch (e) {
    return {
      props: {
        pages: null,
        brand: null,
      },
    };
  }
};

export default Home;
