import { FadeIn } from "./Animations";
import { useTheme } from "./ThemeContext";
import profileImg from "../assets/Vinaykumar-Profilepic.jpg";

function Hero() {
  const { theme } = useTheme();

  
  // Video backgrounds for light and dark themes
  const lightVideo =
    "https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-4k-videos-16038-large.mp4";
  const darkVideo =
    "https://assets.mixkit.co/videos/preview/mixkit-night-sky-with-stars-and-clouds-2648-large.mp4";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          key={theme}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src={theme === "dark" ? darkVideo : lightVideo}
            type="video/mp4"
          />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <FadeIn>
          <div className="mb-6 flex justify-center">
            {/* Outer Gradient + Glow */}
            <div
              className="
      relative
      w-40 h-40 md:w-48 md:h-48
      rounded-full
      p-[3px]
      bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
      shadow-[0_0_25px_rgba(139,92,246,0.6)]
      hover:scale-105
      transition-all duration-300
    "
            >
              {/* Inner Border */}
              <div
                className="
        w-full h-full
        rounded-full
        overflow-hidden
        border-4 border-white dark:border-gray-900
      "
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="
            w-full h-full object-cover
            hover:scale-110
            transition-transform duration-500
          "
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <br />
            <span className=" text-blue-600 dark:text-sky-300 text-3xl">
              Vinay kumar Jerripothula
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A passionate developer building amazing web experiences
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
