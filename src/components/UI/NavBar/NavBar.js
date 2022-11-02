import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: wheat;
  display: flex;
`;

const NavBarUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const NavBarLi = styled.li`
  margin-left: 10px;
`;

const LinkButton = styled(Link)`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: blue;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  text-decoration: none;
`;

const NavBar = (props) => {
  return (
    <>
      <NavBarWrapper>
        <NavBarUl>
          {props.navlist.map((item) => (
            <NavBarLi>
              <LinkButton to={item["path"]}>{item["title"]}</LinkButton>
            </NavBarLi>
          ))}
        </NavBarUl>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
