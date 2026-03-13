import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import '../styles/Navbar.scss';

const Navbar = () => (
    <nav className='navbar'>
        <Link to="/">Accueil</Link>
        <HashLink smooth to="/#skill">Compétences</HashLink>
        <HashLink smooth to="/#projects">Projects</HashLink>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Navbar;