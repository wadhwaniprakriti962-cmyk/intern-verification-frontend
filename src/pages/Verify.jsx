import { useState } from "react";
import "./Verify.css";
import api from "../api/axiosInstance";

export default function Verify() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResult(null);

    try {
      const res = await api.get(
        `/api/interns/verify/${input.trim()}`
      );

      console.log(res.data);

      setResult(res.data);

    } catch (err) {
      console.log(err);

      setResult({
        status: "Not Found ❌"
      });
    }

    setLoading(false);
  };

  return (
    <div className="verify-page">

      <div className="verify-container">

        <div className="verify-header">
          <h2>Verify Internship Certificate</h2>

          <p>
            Enter the internship verification code to check
            authenticity and intern details.
          </p>
        </div>

        <form onSubmit={handleVerify} className="verify-form">

          <input
            type="text"
            placeholder="Enter verification code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">
            {loading ? "Verifying..." : "Verify Code"}
          </button>

        </form>

        {result && (
          <div className="result-card">

            {result.intern ? (
              <>
                <div className="verified-icon">✅</div>

                <h3>Verification Successful</h3>

                <div className="info-box">
                  <p>
                    <span>Name</span>
                    {result.intern.name}
                  </p>

                  <p>
                    <span>Designation</span>
                    {result.intern.designation}
                  </p>

                  <p>
                    <span>Duration</span>
                    {result.intern.duration}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="error-icon">❌</div>

                <h3>Code Not Found</h3>

                <p className="error-text">
                  Please check the verification code and try again.
                </p>
              </>
            )}

          </div>
        )}

      </div>

    </div>
  );
}