import React, { useState, useEffect, useRef } from "react";
import Styles from "./contact.module.css";
import Button from "@/components/atoms/button/Button";
import { Smooch_Sans } from "next/font/google";
import { useRouter } from "next/router";

const SmoochSans = Smooch_Sans({ subsets: ["latin"] });

const Contact = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const validateInputs = () => {
    return (
      inputTitle.trim() !== "" &&
      inputEmail.trim() !== "" &&
      inputDescription.trim() !== ""
    );
  };

  const router = useRouter();

  const sendInfo = () => {
    const isValid = validateInputs();

    if (isValid && checkbox === true) {
      console.log(
        `Title: ${inputTitle}, Description: ${inputDescription}, Email: ${inputEmail}`
      );
      setInputTitle("");
      setInputDescription("");
      setInputEmail("");
      setShowSuccess(true);

      // After 5 seconds, reset the success state and refresh the page
      setTimeout(() => {
        setShowSuccess(false);
        router.reload();
      }, 5000);
    } else {
      console.log("Please fill the inputs");
    }
  };

  useEffect(() => {
    if (showSuccess) {
      // Scroll to the top of the page to show the success message
      window.scrollTo(0, 0);
    }
  }, [showSuccess]);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.inputsBox}>
        <h2 className={SmoochSans.className}>Susisiekti</h2>
        {showSuccess && (
          <div className={Styles.successMessage}>
            Su jumis susisieksime per kelias dienas
          </div>
        )}
        <input
          ref={inputRef}
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="text"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          className={Styles.textarea}
          rows="4"
          cols="45"
          type="text"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="description"
        />
        <div className={Styles.checkbox}>
          <label htmlFor="checkbox"> Jums atsakysime po kelių dienų </label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </div>
        <div className={Styles.buttonSend}>
          <Button text="SEND" onClick={sendInfo} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
