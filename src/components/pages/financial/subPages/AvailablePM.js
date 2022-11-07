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

const AvailablePM = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <Wrapper>
        <h1>Available Payment Methods</h1>
        <MyParagraph>
          Any approved payment methods can be disabled for each brand you have
        </MyParagraph>
      </Wrapper>
    </>
  );
};

export default AvailablePM;
