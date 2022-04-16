import React, { useEffect, useState } from "react";
import GroupRows from "../tableRow/GroupRows";
import HeadingRow from "../tableRow/HeadingRow";

const SalaryTable = ({ expenses }) => {
  const [salary, setSalary] = useState(0);
  const [sum, setSum] = useState(0);
  const [totalInc, setTotalInc] = useState(0);
  const [expens, setExpense] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState();
  const handleOnChange = (e) => {
    const value = e.target.value;
    setSalary(Number(value));
  };

  useEffect(() => {
    setTotalInc(salary + sum);
    setMoneyLeft(totalInc - expens);
  }, [sum, salary, expens]);

  return (
    <>
      <input placeholder={"Lön"} name={"salery"} onChange={handleOnChange} />
      <>
        <HeadingRow title={"Lön"} value={salary} />
        <HeadingRow title={"Extra inkomst"} value={sum} />
        <GroupRows
          title={"Extra inkomst"}
          secondTitle={"Totala inkomster"}
          sum={sum}
          setSum={setSum}
          total={totalInc}
        />
        ---
        <HeadingRow title={"Övriga Utgifter"} value={expens} />
        <GroupRows sum={expens} setSum={setExpense} />
        <HeadingRow title={"Totala Utgifter"} value={expenses + expens} />
        <HeadingRow title={"Kvar efter utgifter"} value={moneyLeft} />
      </>
    </>
  );
};

export default SalaryTable;
