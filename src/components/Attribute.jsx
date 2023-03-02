const Attribute = ({ header, value, icon }) => {
  return (
    <div className="details-attribute">
      <p className="details-attribute-header">{header}</p>
      <p>
        <span className="details-attribute-icon">{icon}</span>
        <span className="details-attribute-value">{value}</span>
      </p>
    </div>
  );
};

export default Attribute;
