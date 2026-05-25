import { NavLink } from "react-router-dom";

export default function Navbar() {
  const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
  return (
    <nav style={styles.nav}>

      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <div style={styles.logoCircle}>IV</div>

        <div>
          <h2 style={styles.logo}>Intern Verification</h2>
          <p style={styles.subText}>Certificate Management System</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={styles.links}>
        <button
         onClick={handleLogout}
        style={styles.logoutBtn}
       >
         Logout
       </button>

        <NavLink
          to="/generate"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btn
          }
        >

          Generate
        </NavLink>

        <NavLink
          to="/verify"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btn
          }
        >
          Verify
        </NavLink>

        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.btn
          }
        >
          Dashboard
        </NavLink>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 32px",
    background: "linear-gradient(to right, #0f172a, #1e293b)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  logoCircle: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px"
  },

  logo: {
    margin: 0,
    color: "white",
    fontSize: "20px",
    fontWeight: "700"
  },

  subText: {
    margin: 0,
    fontSize: "12px",
    color: "#cbd5e1"
  },

  links: {
    display: "flex",
    gap: "14px"
  },

  btn: {
    padding: "10px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#e2e8f0",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    fontWeight: "500",
    transition: "0.3s ease"
  },logoutBtn: {
  padding: "10px 18px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#dc2626",
  color: "white",
  fontWeight: "600"
},

  activeBtn: {
    padding: "10px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#2563eb",
    fontWeight: "600",
    boxShadow: "0 4px 10px rgba(37,99,235,0.4)"
  }
};