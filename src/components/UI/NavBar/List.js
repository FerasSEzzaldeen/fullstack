import styled from "styled-components";

const ListHeader = styled.p`
    font-size: medium;
`;


const ListUl = styled.ul``;

const ListLi = styled.li``;

const List = (props) => {
  return (
    <>
      <ListHeader>{props.title}</ListHeader>
      <ListUl>
        {props.subs.map((sub) => (
          <ListLi>{sub}</ListLi>
        ))}
      </ListUl>
    </>
  );
};

export default List;
