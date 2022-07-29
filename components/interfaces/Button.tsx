import { MouseEventHandler } from "react";
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
  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`;

interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({ onClick, text }: IButtonProps) => {
  return <ButtonOrange onClick={onClick}>{text}</ButtonOrange>;
};

export default Button;
