import { useContext, useRef, useState } from "react";
import { StadiumContext } from '../../context/stadiumContext'
import UploadSuccess from "./uploadSuccess";

function ImageUpload(){
    try{
        const file= useRef(null);
        const [imageUploaded, setImageuploaded] = useState(false);
        const {stadiumName, stadiumStand, stadiumSeats, setImageName, setImagePublished, ImagePublished } = useContext(StadiumContext);
        const validFormats = ["image/png", "image/jpeg", "image/jpg", "image/mp4"]

        return (
            !imageUploaded 
            ?
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                {!ImagePublished ? <label htmlFor="fileInput" style={{fontSize:'3rem', display:'flex', justifyContent:'center'}}>Upload and share your images.</label> : null}
                {!ImagePublished ? <p style={{display:'flex', justifyContent:'center'}}>Please click above to share your experience with us.</p> : null}
                <input id="fileInput" type="file" accept={validFormats} onChange={handleImage} style={{display:'none'}}/>
                <br></br>
                {ImagePublished ? <button onClick={publishImage} style={{height:'50px', width:'300px', fontSize:'1.50rem', backgroundColor:'#2a80b9', color:'white', borderRadius:'5px'}}>Upload</button> : null}
            </div>
            :
            <UploadSuccess setImagePublished={setImagePublished} setImageuploaded={setImageuploaded} redirectMessage='Thanks for sharing your memories with us !'/>
        )

        async function publishImage(){
            if (!file.current) {
                alert("No file uploaded.");
                return;
            }
            
            const formData = new FormData();
            formData.append('file', file.current);
            formData.append('upload_preset', "unsigned_Images");
            formData.append('cloud_name', "deljwxfuf");

            if(!formData){
                return alert('Something Went Wrong, Please Refresh and try again !')
            }

            const res = await fetch(`https://api.cloudinary.com/v1_1/deljwxfuf/image/upload`, {
                method:"POST",
                body: formData
            })
            const img = await res.json();

            if(!img){
                return alert('Something Went Wrong, Please Refresh and try again !')
            }

            setImageName(img.url);

            if(!stadiumName || !stadiumStand || !stadiumSeats || !ImagePublished ){
                return alert('Something Went Wrong, Please fill the manadatory fields and try again ! !')
            }

            const response = await fetch("https://stage-scouts-backend.vercel.app/api/image/upload", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('Authorization')
                },
                body: JSON.stringify({
                    'StadiumName' : stadiumName,
                    'ImageName' : img.url,
                    'StadiumStand' : stadiumStand,
                    'StadiumSeats' : stadiumSeats
                })
            })

            const output = response.json()
            if(output){
                setImageuploaded(true);
            }else{
                return alert('Something Went Wrong, Please try gaain after some time !')
            }

        }

        async function handleImage(e){
            const uploadedFile = e.target.files[0]

            if(!uploadedFile ){
                return alert('File upload failed, Please refresh and try again !')
            }

            if(!validFormats.includes(uploadedFile.type)){
                alert("Invalid Image Format !!");
                return;
            }

            const reader = new FileReader();

            reader.onload = () => {
                setImageName(reader.result);
            }

            reader.readAsDataURL(uploadedFile);
            setImagePublished(true);
            file.current = uploadedFile
    }
    }catch(e){
        alert(e.message)
    }
    
}

export default ImageUpload