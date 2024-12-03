import Link from "next/link";
export default function RoleSelection() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Select Your Role</h1>
      <p>Please select whether you are a Prisoner or a Lawyer to proceed.</p>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link href="/forms/prisonerform">
          <button style={buttonStyle}>Prisoner</button>
        </Link>
        <Link href="/forms/lawyerform">
          <button style={buttonStyle}>Lawyer</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "15px 30px",
  backgroundColor: "#0070f3",
  color: "white",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};
