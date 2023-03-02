import Link from "next/link";
import Slider from "react-slick";
import { projectThreeActive } from "../../sliderProps";
import React, { useState } from "react";



const ContactUs = () => {
        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
        const [subject, setSubject] = useState("");
        const [message, setMessage] = useState("");
        //   Form validation
        const [errors, setErrors] = useState({});

        //   Setting button text
        const [buttonText, setButtonText] = useState("Send");

        const [showSuccessMessage, setShowSuccessMessage] = useState(false);
        const [showFailureMessage, setShowFailureMessage] = useState(false);

        const handleValidation = () => {
            let tempErrors = {};
            let isValid = true;

            if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
            }
            if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
            }
            if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
            }
            if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
            }

            setErrors({ ...tempErrors });
            console.log("errors", errors);
            return isValid;
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            let isValidForm = handleValidation();
        
            if(isValidForm) {
              setButtonText("Sending")
              const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                  email: email,
                  fullname: fullname,
                  subject: subject,
                  message: message,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
              });
        
              const { error } = await res.json();
              if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
        
                // Reset form fields
                setFullname("");
                setEmail("");
                setMessage("");
                setSubject("");
                return;
              }
              setShowSuccessMessage(true);
              setShowFailureMessage(false);
              setButtonText("Send");
              // Reset form fields
              setFullname("");
              setEmail("");
              setMessage("");
              setSubject("");
            }
            console.log(fullname, email, subject, message);
          };
    return (    
        <section
                id="contact"
                className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1"
            >
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-lg-6">
                    <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                        <div className="section-title mb-55">
                        <h2>
                            Have any project on mind! feel free contact with us or{" "}
                            <span>say hello</span>
                        </h2>
                        </div>
                        <div className="contact-info-wrap">
                        <div className="contact-info-item">
                            <div className="icon">
                            <i className="fal fa-map-marker-alt" />
                            </div>
                            <div className="content">
                            <span className="title">Location</span>
                            <b className="text">Houston Texas, USA</b>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="icon">
                            <i className="far fa-envelope-open-text" />
                            </div>
                            <div className="content">
                            <span className="title">Email Address</span>
                            <b className="text">
                                <a href="mailto:support@thenextbyte.com">support@thenextbyte.net</a>
                            </b>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="icon">
                            <i className="far fa-phone" />
                            </div>
                            <div className="content">
                            <span className="title">Phone No</span>
                            <b className="text">
                                <a href="callto:+1(469)4169668">+1 469-416-9668</a>
                            </b>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                    

                    <form
                        onSubmit={handleSubmit}
                        id="contact-area-form"
                        className="contact-area-form text-center wow fadeInRight delay-0-2s"
                        name="contact-area-form"
                        action="#"
                        method="post"
                    >
                        <h4>Send us Message</h4>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control"
                            value={fullname}
                            onChange={(e) => {
                                setFullname(e.target.value);
                            }}
                            name="fullname"
                            // className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        />
                        {errors?.fullname && (
                        <p className="text-red-500">Fullname cannot be empty.</p>
                        )}
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            // className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                            />
                        {errors?.email && (
                        <p className="text-red-500">Email cannot be empty.</p>
                        )}
                        <input
                            type="text"
                            className="form-control"
                            placeholder ="Subject"
                            name="subject"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            // className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        />
                        {errors?.subject && (
                        <p className="text-red-500">Subject cannot be empty.</p>
                        )}
                        <textarea
                            name="message"
                            className="form-control"
                            rows={5}
                            placeholder="Write Message"
                            value={message}
                            onChange={(e) => {
                            setMessage(e.target.value);
                            }}
                            // className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        ></textarea>
                        {errors?.message && (
                            <p className="text-red-500">Message body cannot be empty.</p>
                        )}
                        <button type="submit" className="theme-btn">
                        {buttonText} <i className="fas fa-angle-double-right" />
                        </button>
                        <div className="text-left">
                            {showSuccessMessage && (
                            <p className="text-green-500 font-semibold text-sm my-2">
                                Thank you! Your Message has been delivered.
                            </p>
                            )}
                            {showFailureMessage && (
                            <p className="text-red-500">
                                Oops! Something went wrong, please try again.
                            </p>
                            )}
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="contact-shapes">
                <img
                    className="shape circle"
                    src="assets/images/shapes/slider-dots.png"
                    alt="Shape"
                />
                <img
                    className="shape dots"
                    src="assets/images/shapes/contact-dots.png"
                    alt="Shape"
                />
                <img
                    className="shape wave-line"
                    src="assets/images/shapes/contact-wave-line.png"
                    alt="Shape"
                />
                </div>
        </section>
    );
};
export default ContactUs;