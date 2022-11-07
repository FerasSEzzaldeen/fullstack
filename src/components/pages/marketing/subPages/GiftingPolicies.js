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

const GiftingPolicies = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Welcome to Gifting Policies</h1>
        <MyParagraph>Allow your customers to be able to purchase a gift for another person</MyParagraph>
      </Wrapper>
    </>
  );
};

export default GiftingPolicies;
