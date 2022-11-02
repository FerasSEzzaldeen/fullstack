import NavBar from "../../../UI/NavBar/NavBar";

const navlist = [
  {"title": "Digital Subscriptions", "path": "/digital/subscriptions" },

];

const DigitalSubs = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>welcome DigitalSubs</h1>
    </>
  );
};

export default DigitalSubs;
