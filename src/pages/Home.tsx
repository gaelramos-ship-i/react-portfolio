import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'
import '../styles/home.scss'

const Home = () => {
    return (
    <>
    <header>
        <a id='title' href="/">Portfolio</a>
        <Navbar />
    </header>

    <main>
        <section>
            <article>
                <h1>Bonjour, je suis Gaël</h1>
                <p>Formation : Développeur web et web mobile <br />Titulaire d’un BTS Gestion des Petites et Moyennes Entreprises et d’une licence professionnelle en droit social et gestion de la paie, j’ai acquis des compétences en organisation, rigueur et gestion de projet. Ces qualités me permettent d’aborder le développement web avec méthode et de participer activement a la création et la gestion de site web.</p>
                <a href="#projets">Découvrir mes projets</a>
            </article>
            <article>
                {/* <img src="/" alt="Photo Gaël" /> */}
            </article>
        </section>
    </main>

    <Footer/>
    </>
    )
};

export default Home;