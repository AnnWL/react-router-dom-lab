import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";

import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import LetterForm from "./components/LetterForm";

const initialState = [
  {
    _id: 1,
    boxSize: "Small",
    boxOwner: "Alex",
  },
  {
    _id: 2,
    boxSize: "Medium",
    boxOwner: "Bernard",
  },
  {
    _id: 3,
    boxSize: "Big",
    boxOwner: "Cam",
  },
];

function App() {
  const [mailbox, setMailbox] = useState(initialState);
  const [letters, setLetters] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailbox.length + 1;
    setMailbox([...mailbox, newMailboxData]);
  };

  const addLetter = (newLetter) => {
    const letterWithId = {
      ...newLetter,
      id: Date.now(),
      mailboxId: Number(newLetter.mailboxId),
    };
    setLetters((prevLetters) => [...prevLetters, letterWithId]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailbox={mailbox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailbox={mailbox} letters={letters} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/new-letter"
          element={
            <LetterForm
              letters={letters}
              mailbox={mailbox}
              addLetter={addLetter}
            />
          }
        />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  );
}

export default App;
