import NavBar from "../../UI/NavBar/NavBar";
import styled from "styled-components";
const navlist = [
  { title: "Digital Subscriptions", path: "/digital/subscriptions" },
];

const Wrapper = styled.div`
  margin: 20px;
`;

const Digital = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Welcome To Digital Subscriptions</h1>
      </Wrapper>
    </>
  );
};

export default Digital;
