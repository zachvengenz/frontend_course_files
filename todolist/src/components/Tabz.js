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
        <Tab value="three" label="Info" />
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
      {value === "three" && (
        <div>
          <h2>
            When assigning Todo priority level<br></br>
            please use "low", "mid" or "high"
          </h2>
        </div>
      )}
    </div>
  );
}

export default Tabz;
