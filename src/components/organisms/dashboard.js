import React, { useEffect } from "react";
import useStore from "../../useStore";
import List from "../molecules/list";
import Loading from "../molecules/loading";

const Dashboard = () => {
  const account = useStore((state) => state.account);
  const balance = useStore((state) => state.balance);
  const incomeBalance = useStore((state) => state.incomeBalance);
  const outputBalance = useStore((state) => state.outputBalance);
  const volume = incomeBalance + (outputBalance - outputBalance * 2);
  const incomePercent = incomeBalance / (volume / 100);

  const checkBalance = useStore((state) => state.checkBalance);
  const checkIncomeBalance = useStore((state) => state.checkIncomeBalance);
  const checkOutputBalance = useStore((state) => state.checkOutputBalance);

  useEffect(() => {
    checkBalance();
    checkIncomeBalance();
    checkOutputBalance();
  }, [account, checkBalance, checkIncomeBalance, checkOutputBalance]);

  return (
    <>
      <List balance={balance}>
        <h3>
          Account-Balance
          <br />
          <span
            style={
              balance > 0
                ? {
                    color: "var(--plus-color)"
                  }
                : balance < 0
                ? {
                    color: "var(--minus-color)"
                  }
                : null
            }
          >
            {balance} €
          </span>
        </h3>
        Volume: {volume} €<br />
        <br />
        Income: {incomeBalance} €<br />
        Output: {outputBalance} €<br />
        <br />
        <Loading outputBalance={outputBalance} percent={incomePercent} />
        <br />
      </List>
    </>
  );
};

export default Dashboard;
