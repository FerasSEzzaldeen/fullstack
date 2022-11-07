import NavBar from "../../../UI/NavBar/NavBar";
import styled from "styled-components";
const navlist = [
  { title: "Require Physical Address", path: "/digital/subscriptions" },
];
const Wrapper = styled.div`
  margin: 20px;
`;

const MyParagraph = styled.p``;

const DigitalSubs = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Require Physical Address</h1>
        <MyParagraph>
          Enabling this policy will require any customer purchasing a digital
          subscription to provide a valid physical address
        </MyParagraph>
      </Wrapper>
    </>
  );
};
export default DigitalSubs;
