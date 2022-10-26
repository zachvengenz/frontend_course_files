import React, { useState } from "react";
import Todolist from "./Todolist";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// code formatted with Prettier

function Tabz() {
  const [value, setValue] = useState("one");

  const handleChange = (event, value) => {
    setValue(value);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="Home" />
        <Tab value="two" label="Todos" />
      </Tabs>
      {value === "one" && (
        <div>
          <h1>Oi! G'day mate!</h1>
          <h2>Navigate to the Todos tab please</h2>
        </div>
      )}
      {value === "two" && (
        <div>
          {" "}
          <Todolist />{" "}
        </div>
      )}
    </div>
  );
}

export default Tabz;
