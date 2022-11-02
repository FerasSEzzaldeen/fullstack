import NavBar from "../../UI/NavBar/NavBar";

const navlist = [
  { title: "Gifting Policies", path: "/marketing/giftingpolicies" },
  { title: "Support Trials", path: "/marketing/supporttrials" },
];

const Marketing = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>hello marketing</h1>
    </>
  );
};

export default Marketing;
