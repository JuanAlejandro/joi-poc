import React from "react";
import "./styles.css";

import { Input } from "./Components";

import useValidation from "./store/validations";

export default function App() {
  const { error, value, validate } = useValidation();
  const handleChange = React.useCallback(
    ({ target: { value } }) => {
      validate(value);
    },
    [validate]
  );
  // const helpText = errors.map(e => e.message).join(" ");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Input
        name="email"
        type="email"
        value={value}
        helptext={error}
        onChange={handleChange}
      />
    </div>
  );
}
