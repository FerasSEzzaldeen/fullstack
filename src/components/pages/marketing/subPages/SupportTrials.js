import NavBar from "../../../UI/NavBar/NavBar";
import styled from "styled-components";
const navlist = [
  { title: "Gifting Policies", path: "/marketing/giftingpolicies" },
  { title: "Support Trials", path: "/marketing/supporttrials" },
];

const Wrapper = styled.div`
  margin: 20px;
`;

const MyParagraph = styled.p`

`;

const SupportTrials = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Welcome to Support Trials</h1>
        <MyParagraph>This allows your services the ability to manage trial eligability,  support free trials, or reduce priced trials</MyParagraph>
      </Wrapper>
    </>
  );
};


export default SupportTrials;
