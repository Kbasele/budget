import React, { useEffect, useState } from "react";
import HeadingRow from "./HeadingRow";
import InputRow from "./InputRow";

const GroupRows = ({ setSum, secondTitle, total }) => {
  const [numOfInputs, setNumOfInputs] = useState(1);
  const [inputObj, setInputObj] = useState([]);
  const handleOnKlick = () => {
    setNumOfInputs(numOfInputs + 1);
  };

  const arr = [];

  for (let i = 0; i < numOfInputs; i++) {
    arr.push(i);
  }

  const calcSum = () => {
    const sum = Object.values(inputObj).reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    setSum(sum);
  };

  useEffect(() => {
    calcSum();
  }, [inputObj]);

  return (
    <>
      {arr.map((item) => {
        return (
          <InputRow id={item} setInputObj={setInputObj} inputObj={inputObj} />
        );
      })}
      <button onClick={handleOnKlick}> lägg till</button>
      <HeadingRow title={secondTitle} value={total} />
    </>
  );
};
export default GroupRows;
