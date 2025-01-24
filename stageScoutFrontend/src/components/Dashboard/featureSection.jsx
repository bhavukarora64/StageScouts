function FeatureSection(){
    return(
        <div style={{display:'flex', marginTop:'200px', gap:'80px'}}>
            <div style={{ width:'250px', height:'350px', display:'flex', flexFlow:'column', alignItems:'center', textAlign:'center',paddingBottom:'20px', backgroundColor:'#2a80b9', color:'white', borderRadius:'10px'}}>
                <h1>Explore stadium views by stand/seat.</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRzN1zdr2Sb3KZNY7oeh0k4Q__8u1XkN39w&s" style={{ borderRadius:'50%', width:'200px', height:'200px', marginBottom:'10px'}}></img>
            </div>
            <div style={{width:'250px', height:'350px', display:'flex', flexFlow:'column', alignItems:'center', textAlign:'center',paddingBottom:'20px', backgroundColor:'#2a80b9', color:'white', borderRadius:'10px'}}>
                <h1>User-uploaded real images for authenticity.</h1>
                <img src="https://ca.billboard.com/media-library/diljit-dosanjh-at-an-earlier-tour-stop.jpg?id=52131115&width=1200&height=800&quality=90&coordinates=0%2C0%2C0%2C0" style={{ borderRadius:'50%', width:'200px', height:'200px', marginBottom:'10px'}}></img>
            </div>
            <div style={{width:'250px', height:'350px', display:'flex', flexFlow:'column', alignItems:'center', textAlign:'center',paddingBottom:'20px' ,backgroundColor:'#2a80b9', color:'white', borderRadius:'10px'}}>
                <h1>Make your seat/stand selection worth it.</h1>
                <img src="https://media.istockphoto.com/id/472240100/photo/crowd-of-people-at-during-a-concert.jpg?s=612x612&w=0&k=20&c=dkFc7glkaIjdWyP7gI0huUIKbeMduJxyrle02ioH81c=" style={{ borderRadius:'50%', width:'200px', height:'200px', marginBottom:'10px'}}></img>
            </div>
        </div>
    )
}

export default FeatureSection