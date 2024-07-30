import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import sheetdb from 'sheetdb-node';

// Create a config file with your SheetDB API URL
const config = {
  address: 'https://sheetdb.io/api/v1/oef13fopncqb7',
};

// Create a new client
const client = sheetdb(config);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeframe: "",
    project: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number is not valid. It should be 10 digits.";
    }
    if (!formData.timeframe) tempErrors.timeframe = "Timeframe is required.";
    if (!formData.project) {
      tempErrors.project = "Project description is required.";
    } else if (formData.project.split(' ').length < 5) {
      tempErrors.project = "Project description must be at least 20 words.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const submissionData = {
        ...formData,
        date: formatDate(new Date()), // Format the date to dd/mm/yyyy
      };

      try {
        await client.create(submissionData);
        alert("Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          timeframe: "",
          project: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error submitting the form: ", error);
        alert("There was an error submitting your enquiry. Please try again.");
      }
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1 lg:max-w-screen-xl lg:mx-auto">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91 7982082271</h3>
                  <h3>+91 8890923521</h3>
                  <span>Call us: Mon - Sat 9:00 - 20:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Noida Uttar Pradesh India</h3>
                  <span>
                    {" "}
                    Block A, Supertech Business Park, Sector 16, Noida,Uttar
                    Pradesh 201301{" "}
                  </span>
                </div>

                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>quantumtechsolution@outlook.in</h3>
                  <span>Email us to get a connect</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error text-red-500">{errors.name}</p>}
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Phone Number</span>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>
                  <div className="inputs">
                    <span>Timeframe</span>
                    <input type="text" name="timeframe" value={formData.timeframe} onChange={handleChange} />
                    {errors.timeframe && <p className="error">{errors.timeframe}</p>}
                  </div>
                </div>
                <div className="inputs">
                  <span>Tell us a bit about your project*</span>
                  <textarea name="project" cols="30" rows="10" value={formData.project} onChange={handleChange}></textarea>
                  {errors.project && <p className="error">{errors.project}</p>}
                </div>
                <button className="button-primary" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
