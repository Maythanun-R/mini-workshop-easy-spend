import React from "react";
import { Button, FormSelect } from "react-bootstrap";

function Header(props) {
  return (
    <>
      <h2 style={{ marginBottom: 20, textTransform: "uppercase" }}>
        Easy Spend
      </h2>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h4 style={{ margin: 0 }}>Filter : </h4>
        <FormSelect
          size="sm"
          style={{ width: "50%" }}
          value={props.filterType}
          onChange={(e) => props.onFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </FormSelect>
        <Button variant="primary" onClick={props.onAdd}>
          Add New
        </Button>
      </div>
    </>
  );
}

export default Header;
