import ProfileCard from "./ProfileCard"
import ProfileData from "./ProfileData"

function Main(){
    const profileComponent = ProfileData.map(data => <ProfileCard key={data.id} data={data}/>)
    return(
        <div >
           {profileComponent}
        </div>
    )
}

export default Main