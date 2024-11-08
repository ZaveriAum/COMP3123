import { Link } from "react-router-dom"
import './NavBar.css';

const NavBar = () => {
    return (<div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link> {/* Link to the Home page */}
                </li>
                <li>
                    <Link to="/form">Form</Link> {/* Link to the Form page */}
                </li>
                <li>
                    <Link to="/user">User</Link> {/* Link to the User page */}
                </li>
            </ul>
        </nav>
    </div>);
}

export default NavBar