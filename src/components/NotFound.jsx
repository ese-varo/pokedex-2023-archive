const NotFound = ({ title = "Something went wrong! ", label }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{label}</p>
    </div>
  );
};

export default NotFound;
