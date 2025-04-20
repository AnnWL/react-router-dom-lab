import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const LetterForm = (props) => {
  const { mailboxId } = useParams();
  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  const initialState = {
    mailboxId: 0,
    recipient: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addLetter(formData);
    setFormData(initialState);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          {props.mailbox.map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default LetterForm;
