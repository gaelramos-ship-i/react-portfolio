import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'
import Competences from './Competences.tsx';
import '../styles/home.scss';
import '../styles/competences.scss';
import '../styles/projects.scss';

const Home = () => {
    return (
    <>
    <header>
        <a id='title' href="/">Portfolio</a>
        <Navbar />
    </header>

    <main>
        <section>
            <article id='presentation'>
                <h2>Développeur web et web mobile</h2>
                <h1>Bonjour, je suis Gaël</h1>
                <p>Titulaire d’un BTS Gestion des Petites et Moyennes Entreprises et d’une licence professionnelle en droit social et gestion de la paie, j’ai acquis des compétences en organisation, rigueur et gestion de projet. Ces qualités me permettent d’aborder le développement web avec méthode et de participer activement a la création et la gestion de site web.</p>
                <a href="#projets">Découvrir mes projets</a>
            </article>
        </section>
        <Competences/>
    </main>

    <Footer/>
    </>
    )
};

export default Home;