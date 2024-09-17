// Gemini AI assisted code

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

const PriceTrackerCommunity = React.memo(() => {
  const { theme } = useTheme();

  const [inputs, setInputs] = useState([{ name: "", value: "" }]);

  const handleInputChange = (index, field, value) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][field] = value;
      return updatedInputs;
    });
  };

  const addInput = () => {
    setInputs([...inputs, { name: "", value: "" }]);
  };

  const removeInput = (index) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs.splice(index, 1);
      return updatedInputs;
    });
  };

  return (
    <>
      {/** Add Button for Products To Track */}
      <Button className="add-card" variant={theme} onClick={addInput}>
        Add Reviews
      </Button>
      {/** Add Products for Products To Track */}

      <Form>
        <div>
          {inputs.map((input, index) => (
            <Form.Group key={index} controlId={`input-${index}`}>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                value={input.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter Product Review"
                value={input.value}
                onChange={(e) =>
                  handleInputChange(index, "value", e.target.value)
                }
              />
              <Button variant={theme} onClick={() => removeInput(index)}>
                Remove
              </Button>
              <Button variant={theme}>Submit Review</Button>
            </Form.Group>
          ))}
        </div>
      </Form>
    </>
  );
});

export default PriceTrackerCommunity;
