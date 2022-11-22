function InputTextArea({ type, text, name, placeholder, handleOnChange, value, maxLength }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-sm text-label" htmlFor={name}>
        {text}:
      </label>
      <textarea
        className="py-1 px-2 border rounded font-normal"
        maxLength={maxLength}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder} //deixar com um tom mais claro
        onChange={handleOnChange}
        value={value}
        multiple={true}
      />
    </div>
  );
}

export default InputTextArea;
