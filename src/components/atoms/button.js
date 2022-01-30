import styled from "@emotion/styled";

const Button = styled.button`
  color: var(--secondary);
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px;
  border-radius: 2px;
  border: none;
  transition: background 0.5s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled {
    background: var(--secondary-light);
  }
  ${({ type, width = "280" }) => {
    const color =
      type === "income"
        ? "var(--plus-color)"
        : type === "output"
        ? "var(--minus-color)"
        : type === "standard"
        ? "var(--secondary-light)"
        : "var(--secondary)";
    return `
      background: ${color};
      width: ${width}px;
    `;
  }}
`;

export default Button;
