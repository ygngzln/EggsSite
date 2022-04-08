import { Link } from "react-router-dom";

export default function Titlenav() {
    return (
        <div className="title">
            <Link to="/" id="webname" onClick={this.reset}>Egg's Website</Link>
        </div>
    )
}