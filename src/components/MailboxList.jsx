import React from "react";
import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailbox.map((currentMailbox) => (
          <li key={currentMailbox._id}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              Mailbox {currentMailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
