import React, {useState } from "react";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleOnBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (!inputValue) {
      alert(`${inputType} is required`);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="card m-3 p-3">
        <h3 className="card-title">Contact</h3>
      <form>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            placeholder="Enter full name"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            I'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
          />
        </div>
        <button 
        type="submit" 
        className="btn btn-primary my-3"
        onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
