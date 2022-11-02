import NavBar from "../../../UI/NavBar/NavBar";
const navlist = [
  { title: "Available Credit Cards", path: "/financial/availavlecc" },
  { title: "Available Payment Methods", path: "/financial/availablepm" },
  { title: "Allow for Credit and Bill Me", path: "/financial/allowforcredit" },
  { title: "Refund Policies", path: "/financial/refundpolicies" },
  { title: "Declined Payment Policies", path: "/financial/declinedpp" },
];

const RefundPolicies = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>welcome RefundPolicies</h1>;
    </>
  );
};

export default RefundPolicies;
