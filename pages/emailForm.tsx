import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../components/interfaces/Logo";
import {
  DescriptionText,
  TitleText,
} from "../components/interfaces/TextInterfaces";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  height: ${({ theme }) => theme.vh100};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled(TitleText)`
  font-size: 56px;
  text-align: center;
`;

const Description = styled(DescriptionText)`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

const Form = styled.form`
  padding-left: 20px;
`;

const Input = styled.input`
  all: unset;
  padding: 10px 10px;
  border: 1px solid ${({ theme }) => theme.orangeColor};
  ::placeholder {
    color: #000000;
  }
`;

const SubmitInput = styled.input`
  all: unset;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.orangeColor};
  margin-left: 10px;
  border-radius: 10px;
  color: #ffffff;
`;

const ErrorMessage = styled.span`
  padding-left: 20px;
  color: red;
  font-size: 12px;
  margin-top: 10px;
`;

interface IFormValues {
  email: string;
}

const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormValues>();
  const [buttonLoading, setButtonLoading] = useState(false);
  const router = useRouter();

  const onValid: SubmitHandler<IFormValues> = async (data) => {
    if (buttonLoading) {
      return;
    }
    setButtonLoading(true);
    try {
      await axios.post(
        "/api/email",
        {
          email: data.email,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      router.push("/thankyou");
    } catch (e) {
      setError(
        "email",
        {
          message: "알 수 없는 에러가 발생했습니다. 다시 시도해보세요.",
        },
        { shouldFocus: true }
      );
    }
  };
  return (
    <Container>
      <TextContainer>
        <Logo />
        <Title>감사합니다!</Title>
        <div>
          <Description>
            관심을 가져주신 고객님께 감사의 말씀드립니다.
          </Description>
          <Description>저희 서비스가 정식으로 출시될 때,</Description>
          <Description>
            알림을 받으시고 싶으시다면 이메일을 입력해주시고,
          </Description>
          <Description>다양한 혜택도 받아가세요!</Description>
        </div>
      </TextContainer>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: EMAIL_REG_EXP,
              message: "유효한 이메일 형식이 아닙니다.",
            },
          })}
        />
        <SubmitInput
          type="submit"
          value={buttonLoading ? "로딩..." : "저장하기"}
        />
      </Form>
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
    </Container>
  );
};

export default EmailForm;
