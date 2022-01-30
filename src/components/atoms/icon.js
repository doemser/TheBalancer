const Icon = ({ icon }) => {
  return (
    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
      <path fill="var(--primary)" d={icon} />
    </svg>
  );
};

export default Icon;
