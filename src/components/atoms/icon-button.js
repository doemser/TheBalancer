import styled from "@emotion/styled";
import Icon from "../atoms/icon";
import useStore from "../../useStore";

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  align-self: flex-end;
  background: var(--secondary);

  &:hover {
    background: var(--secondary-light);
    cursor: pointer;
  }
`;

const IconButton = ({ icon, edit, index, type }) => {
  const saveEditedBooking = useStore((state) => state.saveEditedBooking);
  const editBooking = useStore((state) => state.editBooking);
  const deleteBooking = useStore((state) => state.deleteBooking);

  return (
    <Button
      onClick={() => {
        if (edit && type === "edit") {
          saveEditedBooking(index);
        } else if (type === "delete") {
          deleteBooking(index);
        } else {
          editBooking(index);
        }
      }}
    >
      <Icon icon={icon} />
    </Button>
  );
};

export default IconButton;
