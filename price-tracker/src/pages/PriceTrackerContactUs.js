// Gemini AI assisted code

import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import { Button, Form } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

const PriceTrackerContactUs = () => {
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .sendForm(
        "service_qqgjkzu",
        "template_2amcfgx",
        form.current,
        "0y17vVwacGFPJjgIo"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          // Optionally reset the form or display a success message
          setName("");
          setEmail("");
          setText("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Optionally display an error message
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="user_name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="user_email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={text}
          rows={3}
          placeholder="Enter your message"
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Button variant={theme} type="submit">
        Send
      </Button>
    </Form>
  );
};

export default PriceTrackerContactUs;
