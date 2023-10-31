function ProfileCard(props){
    return(
        <div className="profilecard">
            <div className="row">
                <div className="col">
                <h1 style={{fontSize:25, color:"whitesmoke"}}>{props.data.name}</h1>
                </div>
                <div className="col">
                <p style={{fontSize:15, color:"black"}}>{props.data.email}</p>
                </div>
            </div>
           
            <br/>
           
        </div>
    )
}

export default ProfileCard