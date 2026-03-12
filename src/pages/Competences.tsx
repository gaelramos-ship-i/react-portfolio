import data from '../data/competences.json';

const  Competences = () => {
    return (
    <>
    <section>
        <h2>Mes <span>compétences</span></h2>
        <div>
            {data.map((competence) => (
                <article key={competence.id}>
                    <img src={competence.image} alt={competence.title} />;
                    <h3>{competence.title}</h3>
                </article>
            ))}
        </div>
    </section>
    </>
    )
};

export default Competences;