import type { NextPage } from "next";
import PageWithImage from "../components/PageWithImage";

const Home: NextPage = () => {
  return (
    <PageWithImage
      page={{
        image: "image.jpg",
        title: "합리적인 가격으로\n일상을 좀 더 가치있게",
        description:
          "한 잔 당 1500원의 가격으로\n합리적인 데일리 루틴을 지켜보세요",
      }}
    />
  );
};

export default Home;
