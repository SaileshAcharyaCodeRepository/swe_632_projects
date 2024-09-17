// Gemini AI assisted code

import { useTheme } from "../contexts/ThemeProvider";
import { useProductInfoContext } from "../contexts/ProductInfoProvider";

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "../styles/PriceTrackerForm.css";

const PriceTrackerForm = ({
  currItem,
  currID,
  currName,
  currNumber,
  currWebsites,
  currPrices,
}) => {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    // products,
    // handleAddProduct,
    // handleRemoveProduct,
    // handleUpdateProductName,
    // handleUpdateProductNumber,
    handleAddProductTrackedWebsites,
    // handleRemoveProductTrackedWebsites,
  } = useProductInfoContext();

  const [inputs, setInputs] = useState([]);
  //const [inputs, setInputs] = useState(currWebsites);

  const handleAdd = () => {
    setInputs([...inputs, ""]);
  };

  const handleUpdate = (index, value) => {
    setInputs((prevItems) =>
      prevItems.map((item, i) => (i === index ? value : item))
    );
  };

  const handleRemove = (index) => {
    setInputs((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  /*
  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const addInput = () => {
    const newId = Date.now();
    setInputs([...inputs, { id: newId, value: "" }]);
  };

  const removeInput = (id) => {
    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };
  */

  const handleCloseAndSubmit = () => {
    const uniqueArray = [...new Set(inputs)];
    setInputs(uniqueArray);

    handleAddProductTrackedWebsites(currID, inputs);
    handleClose();
  };

  return (
    <>
      <Button className="edit-info-button" variant={theme} onClick={handleShow}>
        Edit Info
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Websites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/**
            {console.log(
              "Form Body",
              "currName: ",
              currName,
              "currNumber: ",
              currNumber,
              "type of currNumber: ",
              typeof currNumber,
              "currWebsites: ",
              currWebsites,
              "typeof currWebsites: ",
              typeof currWebsites,
              "currPrices: ",
              currPrices,
              "typeof currPrices: ",
              typeof currPrices
            )} 
            */}
            <div>
              {inputs.map((item, index) => (
                <div key={index}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Website"
                    value={item}
                    onChange={(e) => handleUpdate(index, e.target.value)}
                  />
                  <Button variant="danger" onClick={() => handleRemove(index)}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="success" onClick={handleAdd}>
              Add New Website
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={theme} onClick={handleCloseAndSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PriceTrackerForm;
