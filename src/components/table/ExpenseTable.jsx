import React, { useEffect, useState } from "react";
import HeadingRow from "../tableRow/HeadingRow";
import GroupRows from "../tableRow/GroupRows";

const ExpensTable = ({ totalSum, setTotalSum }) => {
  const [sumRör, setSumRör] = useState(0);
  const [sumFast, setSumFast] = useState(0);

  useEffect(() => {
    setTotalSum(sumRör + sumFast);
  }, [sumRör, sumFast]);

  return (
    <>
      <HeadingRow title={"fasta utgifter"} value={sumFast} />
      <GroupRows title={"Extra inkomst"} sum={sumFast} setSum={setSumFast} />
      --
      <HeadingRow title={"Rörliga utgifter"} value={sumRör} />
      <GroupRows title={"Extra inkomst"} sum={sumRör} setSum={setSumRör} />
      <HeadingRow title={"Totala utgifter"} value={totalSum} />
    </>
  );
};

export default ExpensTable;
