const Dropdown = ({ value }) => {
  return (
    <option value={value} key={value}>
      {value}
    </option>
  );
};

export default Dropdown;
