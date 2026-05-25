import { useState } from "react";
import axios from "axios";
import "./Generate.css";
import api from "../api/axiosInstance";

export default function Generate() {

  const [form, setForm] = useState({
    name: "",
    designation: "",
    duration: ""
  });

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(
        "/api/interns/generate",
        form
      );

      setCode(res.data.verificationCode);

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generate-page">

      <div className="generate-card">

        <h2>Generate Internship Verification</h2>

        <p className="subtitle">
          Create secure verification codes for internship certificates
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Intern Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            value={form.designation}
            onChange={handleChange}
          />

          <input
            type="text"
            name="duration"
            placeholder="Enter Internship Duration"
            value={form.duration}
            onChange={handleChange}
          />

          <button type="submit">
            {loading ? "Generating..." : "Generate Code"}
          </button>

        </form>

        {code && (
          <div className="result-box">

            <h3>Verification Code</h3>

            <div className="code-box">
              {code}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}