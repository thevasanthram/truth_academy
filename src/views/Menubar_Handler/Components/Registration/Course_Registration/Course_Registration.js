// CourseRegistration.jsx
import React, { useState } from "react";
import "./Course_Registration.css";
import emailjs from "emailjs-com";

export default function CourseRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success or error

  const courses = [
    "CBSE Tution",
    "State-Board Tution",
    "Spoken English",
    "Keyboard & Guitar",
    "Karnatic Vocal Classes",
    "Final Cut Pro",
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Mock sending email function (replace with your API call)

  async function sendEmail(data) {
    const plainTextMessage = `
        New Course Registration

        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Course: ${data.course}
        Message: ${data.message || "No additional message provided."}
    `;

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: data.course,
      message: data.message || "No additional message provided.",
      message_html: plainTextMessage,
    };

    try {
      const result = await emailjs.send(
        "service_i2pp3ot",
        "template_bk9v2lg",
        templateParams,
        "RF8g6gDzI8jemWlsm"
      );
      return result.status === 200;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.course) {
      setStatus({ error: "Please fill all required fields (*)" });
      return;
    }

    setStatus({ loading: true });
    try {
      const res = await sendEmail(formData);
      if (res) {
        setStatus({
          success: "Registration successful! We will contact you soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        setStatus({
          error:
            "Oops! Something went wrong. Kindly contact us by phone or email.",
        });
      }
    } catch (err) {
      setStatus({
        error:
          "Oops! Something went wrong. Kindly contact us by phone or email.",
      });
    }
  }

  return (
    <section className="course-registration-section">
      <div className="course-registration-container">
        <h2 className="title">Course Registration</h2>
        <form className="course-form" onSubmit={handleSubmit} noValidate>
          <label className="registration-form-inputs">
            Full Name<span className="required">*</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </label>

          <label className="registration-form-inputs">
            Email Address<span className="required">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="registration-form-inputs">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1234567890"
            />
          </label>

          <label className="registration-form-inputs">
            Select Course<span className="required">*</span>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose a course --</option>
              {courses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="registration-form-inputs">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any questions or comments?"
              rows="4"
            />
          </label>

          {/* <button type="submit" disabled={status?.loading}>
            {status?.loading ? "Sending..." : "Register Now"}
          </button> */}

          {/* {status?.error && <p className="status error">{status.error}</p>}
          {status?.success && (
            <p className="status success">{status.success}</p>
          )} */}
        </form>
        <button type="submit" onClick={handleSubmit} disabled={status?.loading}>
          {status?.loading ? "Sending..." : "Register Now"}
        </button>
        {status?.error && <p className="status error">{status.error}</p>}
        {status?.success && <p className="status success">{status.success}</p>}
      </div>
    </section>
  );
}
