import Copyright from "./Copyright";
import Links from "./Links";
import Suggestions from "./Suggestions";

function User(props) {
    return (
        <div class="usuario">
            <img src={`../assets/img/${props.user.image}`}/>
            <div class="texto">
                <strong>{props.user.username}</strong>
                {props.user.name}
            </div>
            </div>
            );
}

export default function Sidebar() {
const user = [
    {
        user: {
            username: "catanacomics",
            image:"catanacomics.svg",
            name: "Catana",
        },
    }
];
    return (
            <div class="sidebar">
{user.map((user)=> <User user={user.user}/>)}
            <Suggestions />
            <Links />
            <Copyright />
        </div>
    );
}











