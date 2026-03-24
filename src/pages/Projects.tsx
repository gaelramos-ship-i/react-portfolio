import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from '../data/projects.json';

type Project ={
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
};

const Projects = () => {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(()=>{
        setProjects(data)
    }, []);

    return(
        <>
        <section id="sectionPro">
            <h2>Mes <span>projets</span></h2>

            <div className="project-list">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            url={project.url}
                        />
                    ))
                ) : (
                    <p>Aucun projet disponible.</p>
                )}
            </div>
        </section>
        </>
    );
};

export default Projects;