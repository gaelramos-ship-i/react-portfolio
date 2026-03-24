type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    url: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, url }) => (
    <div className="project-card">
        <a href={url}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    </div>
);

export default ProjectCard;