import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #fafbfc;
  border-top: 1px solid #e4e8eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  gap: 20px;
  span {
    font-size: 12px;
    color: #424242;
  }
`;

const Footer = () => {
  const router = useRouter();
  return router.pathname === "/" ? null : (
    <Container>
      <div>AfterNight Project</div>
      <span>
        저희 서비스에 관심이 있으신 분들은 편하게 연락주시기 바랍니다.
      </span>
      <span>대표자: 이중민</span>
      <span>이메일: boonddiga00@yonsei.ac.kr</span>
      <span>대표 전화: 010-6436-7876</span>
      <span>&copy; 2022 AfterNight</span>
    </Container>
  );
};

export default Footer;
