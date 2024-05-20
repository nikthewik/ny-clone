function FormInput({ className, placeholder, value, onChange }) {
  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default FormInput;
