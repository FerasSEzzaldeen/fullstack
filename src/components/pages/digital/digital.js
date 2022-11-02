import NavBar from "../../UI/NavBar/NavBar";

const navlist = [
  {"title": "Digital Subscriptions", "path": "/digital/subscriptions" },

];

const Digital = () => {
  return (
    <>
      <NavBar navlist={navlist} />
      <h1>hello Digital</h1>
    </>
  );
};

export default Digital;
