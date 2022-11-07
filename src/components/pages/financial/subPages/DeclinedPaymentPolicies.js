import NavBar from "../../../UI/NavBar/NavBar";
import styled from "styled-components";
const navlist = [
  { title: "Available Credit Cards", path: "/financial/availavlecc" },
  { title: "Available Payment Methods", path: "/financial/availablepm" },
  { title: "Allow for Credit and Bill Me", path: "/financial/allowforcredit" },
  { title: "Refund Policies", path: "/financial/refundpolicies" },
  { title: "Declined Payment Policies", path: "/financial/declinedpp" },
];

const Wrapper = styled.div`
  margin: 20px;
`;

const MyParagraph = styled.p``;

const DeclinedPaymentPolicies = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Declined Payment Policies</h1>
        <MyParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MyParagraph>
      </Wrapper>
    </>
  );
};

export default DeclinedPaymentPolicies;
