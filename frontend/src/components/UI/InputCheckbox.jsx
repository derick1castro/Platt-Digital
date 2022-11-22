function InputCheckbox({ type, text, name, handleOnChange, value, disabled }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="flex mb-2 text-sm text-label" htmlFor={name}>
        <input
          className="p-2 border rounded mr-2"
          type={type}
          name={name}
          id={name}
          onChange={handleOnChange}
          value={value}
          disabled={disabled}
          multiple={true}
        />
        {text}
      </label>
    </div>
  );
}

export default InputCheckbox;
