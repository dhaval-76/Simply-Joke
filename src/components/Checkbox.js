const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <label className="form__check">
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form__checkInput"
      />
      {label}
    </label>
);

export default Checkbox;
