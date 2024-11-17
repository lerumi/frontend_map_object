import './NavBar.css';
import { ROUTES } from "../Routes.tsx";
import { Link } from "react-router-dom";
import logoMap from '../assets/logo_map.svg'
import { Image } from 'react-bootstrap';


function NavBar() {
    return (
        <nav className="background navbar navbar-expand-lg shadow">
            <div className="container-fluid">
                <Link to = {ROUTES.HOME} className="cl-item navbar-brand"><Image src={logoMap} width={80}/> Объекты на карте</Link>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to = {ROUTES.TAGS} className="cl-item nav-link">Теги</Link>
                    </li>

                  </ul>

            </div>
        </nav>
    )
}


export default NavBar;