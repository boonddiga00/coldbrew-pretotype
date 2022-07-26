import axios from "axios";
import { GetStaticProps } from "next";
import ChooseType from "../components/ChooseType";
import Section from "../components/interfaces/Section";
import {
  DescriptionText,
  TitleText,
} from "../components/interfaces/TextInterfaces";
import { IBrand } from "../types/clayful";
<<<<<<< HEAD
import { useForm } from "react-hook-form";
=======
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)

const content1 = ["카페인", "디카페인"];
const content2 = ["1개월", "3개월"];

const Subscribe = ({ brand }: IGetStaticPropsRetrun) => {
<<<<<<< HEAD
  const { register } = useForm();

  return (
    <>
      <Section horizontalPadding="30px">
        <ChooseType register={register} name="roastery" brand={brand}>
          <TitleText>로스터리를 선택해주세요.</TitleText>
          <DescriptionText>
            국내 유명 로스터리의 콜드브루를 만나보세요.
          </DescriptionText>
        </ChooseType>
        <ChooseType
          register={register}
          name="caffeine"
          stringContent={content1}
        >
          <TitleText>카페인 여부를 선택해주세요.</TitleText>
          <DescriptionText>카페인이 부담스러우시다면,</DescriptionText>
          <DescriptionText>디카페인도 준비되어 있습니다.</DescriptionText>
        </ChooseType>
        <ChooseType register={register} name="routine" stringContent={content2}>
          <TitleText>배송주기를 선택해주세요.</TitleText>
          <DescriptionText>
            본인의 취향대로 배송주기를 골라주세요.
          </DescriptionText>
        </ChooseType>
      </Section>
    </>
=======
  return (
    <Section horizontalPadding="30px">
      <ChooseType brand={brand}>
        <TitleText>로스터리를 선택해주세요.</TitleText>
        <DescriptionText>
          국내 유명 로스터리의 콜드브루를 만나보세요.
        </DescriptionText>
      </ChooseType>
      <ChooseType stringContent={content1}>
        <TitleText>카페인 여부를 선택해주세요.</TitleText>
        <DescriptionText>카페인이 부담스러우시다면,</DescriptionText>
        <DescriptionText>디카페인도 준비되어 있습니다.</DescriptionText>
      </ChooseType>
      <ChooseType stringContent={content2}>
        <TitleText>배송주기를 선택해주세요.</TitleText>
        <DescriptionText>
          본인의 취향대로 배송주기를 골라주세요.
        </DescriptionText>
      </ChooseType>
    </Section>
>>>>>>> 8044c13 (Subscribe Page for Desktop & Header)
  );
};

export default Subscribe;

interface IGetStaticPropsRetrun {
  brand: IBrand[] | null;
}

export const getStaticProps: GetStaticProps<
  IGetStaticPropsRetrun
> = async () => {
  try {
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
      props: { brand: brandPayload.data },
    };
  } catch (e) {
    return {
      props: {
        brand: null,
      },
    };
  }
};
