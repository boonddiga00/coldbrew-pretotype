import { ReactNode } from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

interface ITitleProps {
  children?: ReactNode;
}

const Title = ({ children }: ITitleProps) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;
