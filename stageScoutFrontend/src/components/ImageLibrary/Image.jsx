import { Link } from "react-router-dom";
function Image(props){
    return (
        <div>
                <Link to={props.sourceURL} target="_blank" rel='noopener noreferrer'><img src={props.sourceURL}alt='Loading Image' style={{width:'300px', height:'200px', border:'1px solid #2a80b9'}}/></Link>
                <h3>Stand Number: {props.standNumber}</h3>
                <h3>Seat Number: {props.seatNumber}</h3>
        </div>

    )
}

export default Image;