import { FadeIn } from './Animations';

function About() {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Node.js', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={200}>
            <div>
              <p className="text-lg text-justify text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate web developer with a keen eye for design and a 
                love for creating seamless user experiences. With a strong foundation 
                in modern web technologies, I specialize in building responsive and 
                performant web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                When I'm not coding, you can find me exploring new technologies. 
                
              </p>
            </div>
          </FadeIn>
         
        </div>
      </div>
    </section>
  );
}

export default About;