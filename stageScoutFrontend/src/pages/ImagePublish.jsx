import ImageUpload from '../components/ImageUploadForm/imageUpload'
import SeatingInputs from '../components/ImageUploadForm/SeatingInputs'
import {UserLoginContext} from '../context/userLoginContext'
import { useNavigate} from "react-router-dom"
import {useContext, useEffect} from 'react'

function ImagePublish() {
  const {loggedIn} = useContext(UserLoginContext);
  const navigate  = useNavigate();

  useEffect(() => {
    !loggedIn ? navigate('/signin') : null
  },[])
  
  return (
    <div>
        <SeatingInputs />
        <ImageUpload />
    </div>
  )
}

export default ImagePublish
