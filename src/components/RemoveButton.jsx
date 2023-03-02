import { FaRegTrashAlt } from "react-icons/fa";
const RemoveButton = ({ onClick }) => {
  return (
    <button className="remove-button" onClick={onClick}>
      <FaRegTrashAlt />
    </button>
  );
};

export default RemoveButton;
