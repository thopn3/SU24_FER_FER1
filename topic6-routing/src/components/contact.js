import { Link } from "react-router-dom";

export default function Contact({name, age}){
    return (
        <div>
            <h3>Contact view</h3>
            <Link to={`/info/${name}/and/${age}`}>Show info</Link>
        </div>
    )
}