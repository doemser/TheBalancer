import styled from "@emotion/styled";

const List = styled.li`
  color: var(--primary);
  text-align: left;
  width: 300px;
  list-style: none;
  background: var(--secondary);
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 20px;
  ${(props) => {
    const color =
      props.balance < 0
        ? "var(--minus-color)"
        : props.balance > 0
        ? "var(--plus-color)"
        : "var(--primary)";
    return `
      border: 2px solid ${color};
      box-shadow: 0 0 10px 0 ${color}
    `;
  }}
`;

export default List;
