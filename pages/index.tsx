import type { NextPage } from "next";
import PageWithImage from "../components/PageWithImage";

const Home: NextPage = () => {
  return (
    <PageWithImage
      reverse
      page={{
        image: "image.jpg",
        title: "콜드브루부터 시작하는\n새로운 모닝루틴",
        description: "얼음만 넣어 간단히,\n바빠도 커피 한 잔 정도는 나를 위해",
      }}
    />
  );
};

export default Home;
