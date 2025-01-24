function Input(props){
  return (
  <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '5px',
      marginBottom: '10px'
    }}>
      <input onChange={props.handleChange} type={props.type} placeholder={props.title} style={{height:'60px', width:'350px', fontSize:'1.25rem', border:'1.5px solid #2a80b9'}} value={props.value} />
  </div>
  )

}

export default Input