import { FadeIn } from './Animations';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Axios', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios original.svg' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MS SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    ],
  },
  {
    name: 'Version Control',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Skills
          </h2>
        </FadeIn>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={category.name} delay={categoryIndex * 150}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {category.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center group"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className="w-20 h-20 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <span className="hidden text-2xl font-bold text-gray-600 dark:text-gray-300">
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      <span className="mt-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;