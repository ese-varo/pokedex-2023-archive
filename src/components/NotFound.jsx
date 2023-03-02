import { FaHeartBroken } from "react-icons/fa";

const NotFound = ({
  title = "Something went wrong!",
  label = "Try again later",
}) => {
  return (
    <div className="not-found">
      <h2 className="not-found-title">{title}</h2>
      <FaHeartBroken className="not-found-icon" />
      <p>{label}</p>
    </div>
  );
};

export default NotFound;
