import React from "react";
import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const singleMailbox = props.mailbox.find(
    (box) => box._id === Number(mailboxId)
  );

  const mailboxLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!singleMailbox) {
    return <p>Mailbox not found.</p>;
  }

  return (
    <>
      <h2> Mailbox {singleMailbox._id}</h2>
      <h3> Details </h3>
      <dl>
        <dt>Boxholder:</dt>
        <dd>{singleMailbox.boxOwner}</dd>
        <dt>Box Size:</dt>
        <dd>{singleMailbox.boxSize}</dd>
      </dl>
      <h4>Letters:</h4>
      {mailboxLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {mailboxLetters.map((letter) => (
            <li key={letter.id}>
              <strong>To:</strong> {letter.recipient}
              <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MailboxDetails;
