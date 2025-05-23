"use client";

import React, { useState } from "react";
import style from "./form.module.scss";


interface SubmitStatus {
  success: boolean;
  message: string;
}

interface MainFormProps {
  name: string;
}

export default function AgentForm({name}: MainFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const wordpressUrl = process.env.NEXT_PUBLIC_C7_URL;
      const formId = process.env.NEXT_PUBLIC_C7_ID;

      const formData = new FormData();
      formData.append("_wpcf7", "103"); // To Change
      formData.append("_wpcf7_version", "6.0.6");
      formData.append("_wpcf7_locale", "en_US");
      formData.append("_wpcf7_unit_tag", "wpcf7-f103-o1"); // To Change
      formData.append("_wpcf7_container_post", "0");
      formData.append("_wpcf7_posted_data_hash", "");
      formData.append("your-subject", "Prospective Buyer Message for " + name);
      formData.append("your-email", email);
      formData.append("your-name", firstName + " " + lastName);
      formData.append("firstname", firstName);
      formData.append("lastname", lastName);
      formData.append("email", email);
      formData.append("phonenumber", phoneNumber);
      formData.append("message", message);

      const response = await fetch(
        `${wordpressUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();
      console.log(result);
      if (result.status === "mail_sent") {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your inquiry has been sent.",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    // <form className={style.form}>
    //   <input type="text" name="firstname" placeholder="First Name" />
    //   <input type="text" name="lastname" placeholder="Last Name" />
    //   <input type="email" name="email" placeholder="Email" />
    //   <input type="number" name="phonenumber" placeholder="Phone Number (optional)"/>
    //   <textarea name="message" placeholder="Enter your message"></textarea>
    //   <button className={style.button}>Send Message</button>
    // </form>
    <form onSubmit={handleSubmit} className={style.form}>
        <input type="text" name="firstname" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" name="lastname" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" name="phonenumber" placeholder="Phone Number (optional)" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <textarea name="message" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit" className={style.button} disabled={isSubmitting} >Send Message</button>
        {submitStatus && (
            <div className={submitStatus.success ? style.success : style.error}>
                {submitStatus.message}
            </div>
        )}
    </form>
  );
}
