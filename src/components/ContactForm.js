import React from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useInput } from "../utility/useInput";

const contactsRef = collection(db, "contacts");

export const ContactForm = () => {
  const [name, nameInput] = useInput({
    type: "text",
    placeholder: "Your name",
    htmlFor: "name",
  });
  const [email, emailInput] = useInput({
    type: "text",
    placeholder: "Your email",
    htmlFor: "email",
  });
  const [message, messageInput] = useInput({
    type: "text",
    placeholder: "Your message",
    htmlFor: "message",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(contactsRef, {
        to: "blazewicz.j@gmail.com",
        from: email,
        replyTo: email,
        message: {
          subject: "Hello from the website",
          text: message,
          html: `<div style="">
    <h3>Hi ${name}</h3>
    <p>here is the message: ${message}</p>
  </div>`,
        },
      });
      alert("Message has been sent");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrap">
      <h1>Contact form</h1> <br />
      {nameInput}
      {emailInput}
      {messageInput}
      <button>Submit</button>
    </form>
  );
};
