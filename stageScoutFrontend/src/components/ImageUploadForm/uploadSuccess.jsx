import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function UploadSuccess(props) {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
        props.setImagePublished(false)
        props.setImageuploaded(false)
        navigate('/imageupload')
    },10000)
    
    return () => clearTimeout(timer)
  },[])

  return (
    <div>
    (
        <div
          style={{
            backgroundColor: "#ffcc00",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
            textAlign: "center",
            margin: "20px auto",
            width: "80%",
          }}
        >
          {props.redirectMessage} 
          <br></br>
          You will be redirected to Upload Page in 10 seconds...
        </div>
      )
    </div>
  );
}

export default UploadSuccess;
