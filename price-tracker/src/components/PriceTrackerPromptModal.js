// Gemini AI assisted code

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

const PriceTrackerPromptModal = ({ isOpen, onClose, onSubmit }) => {
  const { theme } = useTheme();

  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleInputNameChange = (event) => {
    setInputName(event.target.value);
  };
  const handleInputNumberChange = (event) => {
    setInputNumber(event.target.value);
  };
  const handleSubmit = () => {
    onSubmit(inputName, inputNumber);
    onClose();
  };

  return (
    <>
      {/*This is Modal Component to get Product Name and Info*/}
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="product-name"
                value={inputName}
                onChange={handleInputNameChange}
                placeholder="Enter Product Name Here"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Manufacturer Product Number</Form.Label>
              <Form.Control
                type="text"
                name="product-number"
                value={inputNumber}
                onChange={handleInputNumberChange}
                placeholder="Enter Manufacturer Product Number Here"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={theme} onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/*This is Modal Component to get Product Name and Info*/}
    </>
  );
};

export default PriceTrackerPromptModal;
