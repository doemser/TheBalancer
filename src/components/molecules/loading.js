import styled from "@emotion/styled";

const LoadingBackground = styled.div`
  position: relative;
  width: 150px;
  height: 10px;
  border: 1px solid var(--secondary-light);
  overflow: hidden;
  ${({ percent }) => `
    background: linear-gradient(90deg, var(--plus-color) ${percent}%, white ${percent}%)
  `}
`;

const Bar = styled.div`
  width: 150px;
  height: 15px;
  position: absolute;
  transition: left 1s;

  ${({ percent, outputBalance }) => `
    left: ${percent}%;
    background: ${
      outputBalance < 0 ? "var(--minus-color)" : "var(--secondary)"
    };
  `};
`;

const Loading = ({ percent, outputBalance }) => {
  return (
    <LoadingBackground percent="100">
      <Bar outputBalance={outputBalance} percent={percent}></Bar>
    </LoadingBackground>
  );
};

export default Loading;
