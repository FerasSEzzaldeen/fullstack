import styled from "styled-components";

const AnchoButton = styled.a`
  display: flex;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: #353635;
  text-decoration: none;
  margin-bottom: 15px;
  border-bottom: #a7a8a7 1px solid;

`;

const List = (props) => {
  return (
    <>
      <AnchoButton href={props.path}>{props.title}</AnchoButton>
      {/* <ListUl>
        {props.subs.map((sub) => (
          <ListLi>{sub}</ListLi>
        ))}
      </ListUl> */}
    </>
  );
};

export default List;
