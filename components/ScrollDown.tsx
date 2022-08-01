import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  span {
    font-size: 14px;
  }
  @keyframes upDown {
    from {
      bottom: 100px;
    }
    to {
      bottom: 95px;
    }
  }
  animation: upDown 0.5s infinite ease-in-out alternate;
`;

const ScrollDown = () => {
  return (
    <Container>
      <span>Scroll Down</span>
      <svg
        id="geist-icon"
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        viewBox="0 0 24 24"
        width="24"
        style={{ color: "var(--geist-foreground)" }}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </Container>
  );
};

export default ScrollDown;
