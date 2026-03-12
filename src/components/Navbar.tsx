import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import '../styles/Navbar.scss';

const Navbar = () => (
    <nav className='navbar'>
        <Link to="/">Accueil</Link>
        <HashLink smooth to="/#skill">Compétences</HashLink>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Navbar;