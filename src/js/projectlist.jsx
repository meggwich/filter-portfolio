import propTypes from "prop-types";

const ProjectList = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <img
          key={index}
          src={project.img}
          alt={project.category}
          style={{ width: '200px', margin: '10px', height: 'auto', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};



ProjectList.propTypes = {
    projects: propTypes.arrayOf(
        propTypes.shape({
            img: propTypes.string.isRequired,
            category: propTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProjectList;