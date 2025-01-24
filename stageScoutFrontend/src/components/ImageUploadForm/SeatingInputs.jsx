import StadiumDropDown from "./stadiumDropDown";
import { StadiumContext } from '../../context/stadiumContext'
import { useContext, useRef } from "react";

function SeatingInputs(){
    const {setStadiumStand, setStadiumSeats, ImagePublished} = useContext(StadiumContext);

    let stand = useRef();

    let seat = useRef();

     return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: !ImagePublished ? '250px' : '50px' }}>
            {ImagePublished ? <StadiumDropDown /> : null}
            <br></br>
            {ImagePublished ? <input ref={stand} type="text" placeholder="Enter the Stand Name or Number" onChange={updateStand} style={{width:'300px', height:'30px', fontSize:'1.25rem', borderRadius:'5px'}} /> : null}
            <br></br>
            {ImagePublished ? <input ref={seat} type="text" placeholder="Enter the Seat Name or Number" onChange={updateSeat} style={{width:'300px', height:'30px', fontSize:'1.25rem', borderRadius:'5px'}}/> : null}
        </div>
    );

    function updateSeat(e){
        seat = e.target.value;
        setStadiumSeats(seat);
    }

    
    function updateStand(e){
        stand = e.target.value;
        setStadiumStand(stand);
    }
}

export default SeatingInputs