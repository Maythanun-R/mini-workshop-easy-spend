import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddModal({ show, onHide, onSave, editItem }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    type: "Expense",
    method: "Cash",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {
    if (editItem) {
      setFormData({
        id: editItem.id,
        title: editItem.title,
        amount: editItem.amount,
        category: editItem.category,
        type: editItem.type,
        method: editItem.method,
      });
    } else {
      setFormData({
        title: "",
        amount: "",
        category: "food",
        type: "expense",
        method: "cash",
      });
    }
  }, [editItem, show]);

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editItem ? "Edit Transaction" : "Add New Transaction"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select
                name="method"
                value={formData.method}
                onChange={handleChange}
              >
                <option value="cash">Cash</option>
                <option value="credit">Credit Card</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editItem ? "Update" : "Save"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddModal;
