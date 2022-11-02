import NavBar from "../../../UI/NavBar/NavBar";
const navlist = [
  { title: "Gifting Policies", path: "/marketing/giftingpolicies" },
  { title: "Support Trials", path: "/marketing/supporttrials" },
];

const SupportTrials = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>welcome SupportTrials</h1>;
    </>
  );
};

export default SupportTrials;
