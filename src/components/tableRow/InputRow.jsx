import React, { useState } from "react";

const InputRow = ({ id, setInputObj, inputObj }) => {
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
    setFormData({ ...formData, [inputName]: inputValue });
    if (e.target.name == "inputValue") {
      setInputObj((inputObj) => ({ ...inputObj, [id]: Number(inputValue) }));
    }
  };
  return (
    <div>
      <input name={"inputName"} onChange={handleOnChange} />
      <input name={"inputValue"} onChange={handleOnChange} />
    </div>
  );
};

export default InputRow;
