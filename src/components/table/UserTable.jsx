import React, { useState } from "react";
import ExpensTable from "./ExpenseTable";
import SalaryTable from "./SalaryTable";

const UserTable = () => {
  const [totalSum, setTotalSum] = useState(0);

  return (
    <>
      <ExpensTable totalSum={totalSum} setTotalSum={setTotalSum} />
      <div>--------------------------</div>
      <SalaryTable totalSum={totalSum} expenses={totalSum} />;
    </>
  );
};

export default UserTable;
