import React from "react";
import { Button, Table } from "react-bootstrap";

function TableList(props) {
  const listItem = props.list;

  if (!listItem || listItem.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '20px',
        color: '#000',
        backgroundColor: '#e4e5e6',
        borderRadius: '4px',
        margin: '20px 0'
      }}>
        No Data Available
      </div>
    );
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listItem.map((item) => (
            <tr key={item.id}>
              <td style={{ textTransform: "capitalize" }}>{item.title}</td>
              <td>{item.amount}</td>
              <td style={{ textTransform: "capitalize" }}>{item.category}</td>
              <td style={{ textTransform: "capitalize" }}>{item.type}</td>
              <td style={{ textTransform: "capitalize" }}>{item.method}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  style={{ marginRight: 15 }}
                  onClick={() => props.onEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => props.handleDelete(item.id)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableList;
