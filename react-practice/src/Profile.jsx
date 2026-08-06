import "./Profile.css";
function Profile({name, branch, age}){
    return(
        <div className="profile">
            <h2>{name}</h2>
            <h2>{branch}</h2>
            <h2>{age}</h2>
        </div>
    )
}
export default Profile; 