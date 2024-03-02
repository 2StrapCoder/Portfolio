const Portfolio = () => {

    const projects = [
      {
        title: "",
        description: "",
        imageUrl: " ",
        liveUrl: " ",
        codeUrl: " ", 
      },
      {
        title:" ",
        description:" ",
        imageUrl: " ",
        liveUrl: " ",
        codeUrl:" ",
      },
      {
        title:" ",
        description:" ",
        imageUrl: " ",
        liveUrl:" ",
        codeUrl: " ",
      },
      
    ];
  
    return (
      <div className="portfolio">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  
  
  
  
  
  
  
  