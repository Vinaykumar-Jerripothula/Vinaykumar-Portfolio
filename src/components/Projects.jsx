import { FadeIn } from './Animations';

function Projects() {
  const projects = [
    {
      title: 'College Fest Management Web Application',
      year: '2025',
      description: 'A full-stack Fest Management Web Application using React & Java with Controllers, Entities, Services, Dao, Repository Layers and REST APIs.',
      technologies: ['JavaScript', 'React', 'Axios', 'Java', 'Spring Boot', 'REST APIs', 'SQL'],
      frontend: 'https://github.com/Vinaykumar-Jerripothula/Miracle-Fest-Website',
      backend: 'https://github.com/Vinaykumar-Jerripothula/Miracle-Fest-Website-Backend',
    },
    {
      title: 'AI-Based Resume Screening System',
      year: '2026',
      description: 'A responsive React frontend for resume uploads, job description input, and displaying screening results with Python-based Flask backend.',
      technologies: ['React', 'JavaScript', 'Axios', 'Python', 'Flask'],
      frontend: 'https://github.com/Vinaykumar-Jerripothula/AI-Based-Resume-Screening-Final-Year-Project-Frontend',
      backend: 'https://github.com/Vinaykumar-Jerripothula/AI-Based-Resume-Screening-Final-Year-Project-Backend',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Projects
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 group h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {/* Technologies with icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full flex items-center gap-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Frontend
                  </a>
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Backend
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;