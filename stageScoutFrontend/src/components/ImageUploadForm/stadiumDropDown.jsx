import { useState, useEffect} from "react";
import { StadiumContext } from '../../context/stadiumContext'
import { useContext} from "react";

function StadiumDropDown(){

    const {setStadiumName, stadiumName, imageName} = useContext(StadiumContext);

    const [stadiumList, setStadiumList] = useState([]);
    async function getStadium(){
        const response  = await fetch("http://localhost:3000/api/stadium/all", {
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
             {imageName ? <img src={imageName} placeholder='Loading Image 1' style={{height:'auto', width:'auto', maxHeight:'400px', maxWidth:'600px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'5px'}} /> : null}
             <br></br>
            <select
            style={{ width:'600px', height:'50px',borderRadius:'5px', fontSize:'1.25rem'}}
             onChange={(event) => setStadiumName(event.target.value)} value={stadiumName}>
                <option
                 style={{borderRadius:'5px'}}
                 value="" disabled selected={!stadiumName}>
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