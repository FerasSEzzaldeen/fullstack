import styled from "styled-components";

const AnchorButton = styled.a`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  color: #3C4048;
  text-decoration: none;
  margin-bottom: 15px;
  border-bottom: #a7a8a7 2px solid;
  font-weight: 900;
  transition: .2s;

  &:hover{
    color: #EAEAEA;
    border-bottom: #EAEAEA 2px solid;
    font-size: 17px;
    margin-bottom: 30px;
  }
`;

const List = (props) => {
  return (
    <>
      <AnchorButton href={props.path}>{props.title}</AnchorButton>
      {/* <ListUl>
        {props.subs.map((sub) => (
          <ListLi>{sub}</ListLi>
        ))}
      </ListUl> */}
    </>
  );
};

export default List;
