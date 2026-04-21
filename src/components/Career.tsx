import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2019-2021</h3>
            </div>
            <p>
              Built responsive web applications and established CI/CD pipelines using Git and Vercel. 
              Worked closely with clients to deliver high-quality digital experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Engineer</h4>
                <h5>Tech Startup</h5>
              </div>
              <h3>2021-2023</h3>
            </div>
            <p>
              Created robust and scalable APIs and microservices using Node.js, Express, Python, and PostgreSQL. 
              Managed Docker containers and AWS infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Engineer</h4>
                <h5>Enterprise Corp</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a team in building full stack applications with React, Next.js, and TypeScript. 
              Focusing on high performance and exceptional UI/UX standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
