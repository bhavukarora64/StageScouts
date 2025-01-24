function Input(props){
    return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
        marginBottom: '20px',
        fontSize:'1.5rem'
      }}>
        <input onChange={props.handleChange} type={props.type} placeholder={props.title} style={{height:'60px', width:'350px', fontSize:'1.5rem',border:'1.5px solid #2a80b9'}} value={props.value} />
    </div>
    )
  
  }
  
  export default Input