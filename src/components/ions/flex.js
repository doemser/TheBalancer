import styled from "@emotion/styled";

const Flex = styled.span`
  display: flex;
  width: 100%;
  ${({ direction = "column", justify = "center", align = "center" }) => {
    return `
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
    `;
  }}
`;

export default Flex;
