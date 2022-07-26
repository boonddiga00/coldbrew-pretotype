import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.section<ISectionProps>`
  ${({ verticalPadding }) =>
    verticalPadding ? `padding: ${verticalPadding} 0;` : ""}
  ${({ horizontalPadding }) =>
    horizontalPadding ? `padding: 0 ${horizontalPadding};` : ""};
  @media screen and (max-width: 800px) {
    padding: 0 16px;
  }
`;

interface ISectionProps {
  children: ReactNode;
  horizontalPadding?: string;
  verticalPadding?: string;
}

const Section = ({
  children,
  horizontalPadding,
  verticalPadding,
}: ISectionProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      verticalPadding={verticalPadding}
    >
      {children}
    </Container>
  );
};

export default Section;
