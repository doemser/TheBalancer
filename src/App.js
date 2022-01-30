import React from "react";

import Flex from "./components/ions/flex";
import Dashboard from "./components/organisms/dashboard";
import InputForm from "./components/organisms/input-form";
import AccountList from "./components/organisms/account-list";
import GlobalStyles from "./components/ions/globalstyles";

export default function App() {
  return (
    <Flex>
      <GlobalStyles />
      <h1>The Balancer</h1>
      <Dashboard />
      <br />
      <InputForm />
      <br />
      <br />
      <AccountList />
    </Flex>
  );
}
