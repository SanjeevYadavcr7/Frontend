const SelectInput = ({ name, label, value, onChange, options }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <select
        name={name}
        type='text'
        className='w-full p-2 border rounded-lg'
        value={value}
        onChange={onChange}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
        {/* <option value='High'>🔴 High</option>
        <option value='Medium'>🟠 Medium</option>
        <option value='Low'>🟢 Low</option> */}
      </select>
    </div>
  );
};

export default SelectInput;
