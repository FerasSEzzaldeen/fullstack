import NavBar from "../../../UI/NavBar/NavBar";

const navlist = [
  { title: "Available Credit Cards", path: "/financial/availablepm" },
  { title: "Available Payment Methods", path: "/financial/availablepm" },
  { title: "Allow for Credit and Bill Me", path: "/financial/allowforcredit" },
  { title: "Refund Policies", path: "/financial/refundpolicies" },
  { title: "Declined Payment Policies", path: "/financial/declinedpp" },
];

const AllowForCredit = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>welcome AllowForCredit</h1>;
    </>
  );
};

export default AllowForCredit;
