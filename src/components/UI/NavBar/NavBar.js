import { Link } from "react-router-dom";
import styled from "styled-components";
const NavBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #B2B2B2;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #3C4048;
  text-decoration: none;
  border-bottom: #a7a8a7 2px solid;
  transition: .2s;

  &:hover{
    color: #EAEAEA;
    border-bottom: #EAEAEA 2px solid;
    font-size: 17px;
    margin-right: 20px;
  }

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
