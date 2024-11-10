import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

interface Props {
    Home: string
    Tags: string
    Objects: string
}

const NavBar: FC<Props> = ({ Home, Tags, Objects }) => (
    <nav className="background navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <a className="cl-item navbar-brand" href={Home}>Главная</a>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="cl-item nav-link" href={Tags}>Теги</a>
                </li>

              </ul>

        </div>
    </nav>

);


export default NavBar