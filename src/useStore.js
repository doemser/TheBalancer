import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => {
      return {
        account: [],
        balance: 0,
        incomeBalance: 0,
        incomePercentage: 0,
        outputBalance: 0,
        outputPercentage: 0,
        checkBalance: () => {
          let currentBalance = 0;
          set(
            produce((state) => {
              for (let i = 0; i < state.account.length; i++) {
                currentBalance =
                  currentBalance + parseFloat(state.account[i].amount);
              }
              state.balance = currentBalance;
            })
          );
        },
        checkIncomeBalance: () => {
          let currentBalance = 0;
          set(
            produce((state) => {
              for (let i = 0; i < state.account.length; i++) {
                if (state.account[i].amount > 0) {
                  currentBalance =
                    currentBalance + parseFloat(state.account[i].amount);
                }
              }
              state.incomeBalance = currentBalance;
            })
          );
        },
        checkOutputBalance: () => {
          let currentBalance = 0;
          set(
            produce((state) => {
              for (let i = 0; i < state.account.length; i++) {
                if (state.account[i].amount < 0) {
                  currentBalance =
                    currentBalance + parseFloat(state.account[i].amount);
                }
              }
              state.outputBalance = currentBalance;
            })
          );
        },
        addIncome: (title, amount, date) => {
          set(
            produce((state) => {
              state.account.unshift({ title, date, amount });
            })
          );
        },
        addOutput: (title, amount, date) => {
          if (amount > 0) {
            amount = amount - amount * 2;
          }
          set(
            produce((state) => {
              state.account.unshift({ title, date, amount });
            })
          );
        },
        deleteBooking: (index) => {
          set(
            produce((state) => {
              state.account.splice(index, 1);
            })
          );
        },
        editBooking: (index) => {
          set(
            produce((state) => {
              state.account[index].edit = true;
              state.account[index].editValueTitle = state.account[index].title;
              state.account[index].editValueAmount =
                state.account[index].amount;
              state.account[index].editValueDate = state.account[index].date;
            })
          );
        },
        editValueTitle: (value, index) => {
          set(
            produce((state) => {
              state.account[index].editValueTitle = value;
            })
          );
        },
        editValueAmount: (value, index) => {
          set(
            produce((state) => {
              state.account[index].editValueAmount = value;
            })
          );
        },
        editValueDate: (value, index) => {
          set(
            produce((state) => {
              state.account[index].editValueDate = value;
            })
          );
        },
        saveEditedBooking: (index) => {
          set(
            produce((state) => {
              state.account[index].title = state.account[index].editValueTitle;
              state.account[index].date = state.account[index].editValueDate;
              state.account[index].amount =
                state.account[index].editValueAmount;
              state.account[index].edit = false;
            })
          );
        }
      };
    },
    { name: "balancer 1.2" }
  )
);

export default useStore;
