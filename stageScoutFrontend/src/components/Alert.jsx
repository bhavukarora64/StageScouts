import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // If you're using React Router

function AlertComponent(props) {
  const [showAlert, setShowAlert] = useState(true); // State to control alert visibility
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    // Set a timer to remove the alert after 3 seconds
    const timer = setTimeout(() => {
      setShowAlert(false); // Hide the alert
      navigate("/signin"); // Redirect to another site (e.g., "/destination")
    }, 10000);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {showAlert && (
        <div
          style={{
            backgroundColor: "#ffcc00",
            color: "#000",
            padding: "10px 20px",
            borderRadius: "5px",
            textAlign: "center",
            margin: "20px auto",
            width: "80%",
          }}
        >
          {props.redirectMessage} 
          <br></br>
          You will be redirected to Login Page in 10 seconds...
        </div>
      )}
    </div>
  );
}

export default AlertComponent;
