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
  gap: 10px;
  span {
    font-size: 18px;
    color: #ffffff;
  }
  svg {
    @keyframes upDown {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(5px);
      }
    }
    animation: upDown 0.5s infinite ease-in-out alternate;
  }
`;

const ScrollDown = () => {
  return (
    <Container>
      <span>콜드브루 정기구독하러 가기</span>
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
        style={{ color: "#ffffff" }}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </Container>
  );
};

export default ScrollDown;
