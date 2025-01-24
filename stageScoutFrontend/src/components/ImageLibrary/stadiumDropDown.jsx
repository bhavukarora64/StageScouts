import { useState, useEffect} from "react";
import { imageLibraryContext } from '../../context/imageLibrarayContext'
import { useContext} from "react";

function StadiumDropDown(){

    const {setStadiumId, stadiumId} = useContext(imageLibraryContext);

    const [stadiumList, setStadiumList] = useState([]);
    async function getStadium(){
        const response  = await fetch("https://stage-scouts-backend.vercel.app/api/stadium/all", {
            headers: {
                'Authorization': localStorage.getItem('Authorization')
            }
        })
    
        const stadiums = await response.json();
    
        setStadiumList(stadiums);
    }

    useEffect(() => {
        getStadium();
    }, [])

    return (
        <div>
            <select
                style={{ width:'600px', height:'50px',borderRadius:'5px', fontSize:'1.25rem'}}
                value={stadiumId}
                onChange={
                    (event) => {
                        console.log("Selected Stadium ID:", event.target.value);
                        setStadiumId(event.target.value)
                    }
                }>
                <option
                 style={{borderRadius:'5px'}}
                 value="-1" disabled>
                    Select a Stadium
                </option>
                {stadiumList.map((element) => (
                    <option key={element.StadiumId} value={element.StadiumId}>
                        {element.StadiumName}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default StadiumDropDown