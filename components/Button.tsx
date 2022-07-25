import styled from "styled-components";

const ButtonOrange = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 24px;
  background: linear-gradient(180deg, #ff6b00 0%, #ffa400 100%);
  padding: 15px 20px;
  color: #ffffff;
  font-weight: 700;
  border-radius: 10px;
`;

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return <ButtonOrange>{text}</ButtonOrange>;
};

export default Button;
