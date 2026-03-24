import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'
import Competences from './Competences.tsx';
import Projects from './Projects.tsx';
import Contact from './Contact.tsx';
import '../styles/home.scss';
import '../styles/competences.scss';
import '../styles/projects.scss';
import { CiMenuBurger } from "react-icons/ci";

const Home = () => {
    return (
    <>
    <header>
        <a id='title' href="/">Portfolio</a>
        <Navbar />
        < CiMenuBurger
        color='#fff' 
        display='none' />
    </header>

    <main>
        <section id='sectionImage'>
            <article id='presentation'>
                <h2>Développeur web et web mobile</h2>
                <h1>Bonjour, je suis Gaël</h1>
                <p>Titulaire d’un BTS Gestion des Petites et Moyennes Entreprises et d’une licence professionnelle en droit social et gestion de la paie, j’ai acquis des compétences en organisation, rigueur et gestion de projet. Ces qualités me permettent d’aborder le développement web avec méthode et de participer activement a la création et la gestion de site web.</p>
                <a href="https://github.com/gaelramos-ship-i" target='blank'>Découvrir mes projets</a>
            </article>
            <article>
                <img src="/images/Capture d'écran 2026-03-10 152945.png" alt="Photo" />
            </article>
        </section>
        <Competences/>
        <Projects />
        <Contact />
    </main>

    <Footer/>
    </>
    )
};

export default Home;