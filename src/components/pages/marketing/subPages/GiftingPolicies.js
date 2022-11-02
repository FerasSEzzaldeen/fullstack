import NavBar from "../../../UI/NavBar/NavBar";

const navlist = [
  { title: "Gifting Policies", path: "/marketing/giftingpolicies" },
  { title: "Support Trials", path: "/marketing/supporttrials" },
];

const GiftingPolicies = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>welcome GiftingPolicies</h1>;
    </>
  );
};

export default GiftingPolicies;