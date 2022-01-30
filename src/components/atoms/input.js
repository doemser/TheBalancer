import styled from "@emotion/styled";

const Input = styled.input`
  padding: 10px;
  width: 250px;
  border: none;
  border-radius: 5px;
  color: var(--primary);
  background: var(--secondary-light);
  outline: none;

  &:focus {
    border: 2px solid var(--primary);
  }
`;

export default Input;
