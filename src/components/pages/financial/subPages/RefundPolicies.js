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

const RefundPolicies = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Refund Policies</h1>
        <MyParagraph>
          For each brand, do you want to limit to full refunds, partial refunds,
          or no refunds at all.
        </MyParagraph>
      </Wrapper>
    </>
  );
};
export default RefundPolicies;
