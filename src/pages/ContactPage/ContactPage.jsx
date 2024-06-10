import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";
const ContactPage = forwardRef(({ selectCategory }, contactRef) => {
  // const [nameValue, setNameValue] = useState("");
  // const [emailValue, setEmailValue] = useState("");

  // const [submitText, setSubmitText] = useState("");
  // const form = useRef();
  // let date = new Date();
  // let month = date.toLocaleString("en-US", { month: "long" });
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const regex =
  //     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  //   const isValidEmail = regex.test(emailValue);
  //   console.log(isValidEmail);

  //   if (isValidEmail && nameValue !== "" && emailValue !== "") {
  //     emailjs
  //       .sendForm(
  //         "service_uaf0q18",
  //         "template_p8mvbp3",
  //         form.current,
  //         "q76cGc_uSPmNnBO-7"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           setSubmitText("전송되었습니다.");
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   } else if (!isValidEmail) {
  //     setSubmitText("email을 정확히 입력해주세요.");

  //     setTimeout(() => {
  //       setSubmitText("");
  //     }, 3000);
  //   } else if (nameValue === "") {
  //     setSubmitText("name을 정확히 입력해주세요.");
  //     setTimeout(() => {
  //       setSubmitText("");
  //     }, 3000);
  //   } else if (emailValue === "") {
  //     setSubmitText("email을 정확히 입력해주세요.");
  //     setTimeout(() => {
  //       setSubmitText("");
  //     }, 3000);
  //   }
  // };

  // const validateEmail = (e) => {
  //   setEmailValue(e.target.value);
  // };

  useEffect(() => {
    if (selectCategory == "contact") {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [selectCategory]);

  return (
    // <div className="contactpage-container" ref={contactRef}>
    //   <div className="contactpage-wrapper">
    //     <div className="contactpage-titleBox">
    //       <h2>Contact</h2>
    //       <p>{month + "-" + date.getDate()}</p>
    //     </div>
    //     <form ref={form} onSubmit={sendEmail}>
    //       <ul>
    //         <li className="contactpage-list name">
    //           <label className="contactpage-label-name">name</label>
    //           <input
    //             className="contactpage-input-name"
    //             type="text"
    //             name="user_name"
    //             placeholder="Please click to enter"
    //             onChange={(e) => setNameValue(e.target.value)}
    //           />
    //         </li>
    //         <li className="contactpage-list email">
    //           <label className="contactpage-label-email">email</label>
    //           <input
    //             className="contactpage-input-email"
    //             type="email"
    //             name="user_email"
    //             placeholder="Please click to enter"
    //             onChange={(e) => validateEmail(e)}
    //           />
    //         </li>
    //         <li className="contactpage-list message">
    //           <label className="contactpage-label-message">Message</label>
    //           <textarea
    //             className="contactpage-input-message"
    //             name="message"
    //             placeholder="Please click to enter"
    //           />
    //         </li>
    //         <li className="contactpage-list submit">
    //           <input
    //             className="contactpage-submit"
    //             type="submit"
    //             value="Send"
    //           />
    //           <div className="contactpage-submit-text">{submitText}</div>
    //         </li>
    //       </ul>
    //     </form>
    //     <div className="contactpage-footer">
    //       <ul>
    //         <li>
    //           <p>number</p> <p> 010 8006 5105</p>
    //         </li>
    //         <li>
    //           <p>email</p> <p> zerone.arts@gmail.com</p>
    //         </li>
    //         <li>
    //           <p>adress</p> <p> Jeju-si, Jeju-do, Republic of Korea</p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className="contactpage-container" ref={contactRef}>
      <div className="contactpage-box"></div>
    </div>
  );
});

export default ContactPage;
