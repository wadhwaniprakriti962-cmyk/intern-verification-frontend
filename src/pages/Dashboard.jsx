import { useEffect, useState } from "react";
import "./Dashboard.css";
import api from "../api/axiosInstance";

export default function Dashboard() {

  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {

  const fetchInterns = async () => {

    try {

      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found");
        setInterns([]);
        setLoading(false);
        return;
      }

      const res = await api.get(
        "/api/interns/all",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("API RESPONSE:", res.data);

      const data =
        res.data?.interns ||
        res.data?.data ||
        res.data ||
        [];

      setInterns(Array.isArray(data) ? data : []);

    } catch (err) {

      console.log("ERROR:", err.response?.data || err.message);
      setInterns([]);

    }

    setLoading(false);
  };

  fetchInterns();

}, []);

  return (

    <div className="dashboard-page">

      {/* TOP SECTION */}
      <div className="dashboard-header">

        <h1>Intern Dashboard</h1>

        <p>
          View all registered interns and their
          verification details in one place.
        </p>

      </div>

      {/* LOADING */}
      {loading ? (

        <div className="loading-box">
          Loading Intern Data...
        </div>

      ) : interns.length > 0 ? (

        <div className="card-container">

          {interns.map((item) => (

            <div className="card" key={item._id}>

              {/* TOP CIRCLE */}
              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              {/* NAME */}
              <h2>{item.name}</h2>

              {/* DETAILS */}
              <div className="info">

                <p>
                  <span>Role:</span>
                  {item.designation}
                </p>

                <p>
                  <span>Duration:</span>
                  {item.duration}
                </p>

                <p className="code">
                  <span>Code:</span>
                  {item.verificationCode}
                </p>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="empty-box">
          No interns found ❌
        </div>

      )}

    </div>
  );
}