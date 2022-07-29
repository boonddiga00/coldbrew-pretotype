import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Section from "../components/interfaces/Section";
import {
  DescriptionText,
  TitleText,
} from "../components/interfaces/TextInterfaces";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Description = styled(DescriptionText)`
  text-align: center;
`;

const Form = styled.form``;

interface IFormValues {
  email: string;
}

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const EMAIL_REG_EXP =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const onValid: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };
  return (
    <Section verticalPadding="30px">
      <Container>
        <TextContainer>
          <TitleText>감사합니다!</TitleText>
          <div>
            <Description>
              관심을 가져주신 고객님께 감사의 말씀드립니다.
            </Description>
            <Description>
              저희 서비스가 정식으로 출시될 때, 알림을 받으시고 싶으시다면
              이메일을 입력해주세요.
            </Description>
            <Description>
              이메일을 입력해주신 고객님께는 감사의 마음을 담아
            </Description>
            <Description>다양한 혜택을 드립니다!</Description>
          </div>
        </TextContainer>
        <Form onSubmit={handleSubmit(onValid)}>
          <input
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: EMAIL_REG_EXP,
                message: "유효한 이메일 형식이 아닙니다.",
              },
            })}
          />
          <input type="submit" value="저장하기" />
          <span>{errors.email?.message}</span>
        </Form>
      </Container>
    </Section>
  );
};

export default EmailForm;
