import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.section<ISectionProps>`
  padding: ${({ verticalPadding }) =>
    `${verticalPadding ? verticalPadding : 0}`};
  @media screen and (max-width: 800px) {
    padding: ${({ verticalPadding }) => `${verticalPadding ? "16px" : 0}`};
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
