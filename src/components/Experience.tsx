import type { Experience } from '@/types';

const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Full-Stack Developer',
    period: '2023 - Present',
    description: [
      'Led development of microservices architecture serving 100K+ users',
      'Reduced API response time by 45% through optimization and caching strategies',
      'Mentored 3 junior developers and established code review best practices',
      'Implemented CI/CD pipelines reducing deployment time from hours to minutes'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker']
  },
  {
    id: '2',
    company: 'StartupX',
    position: 'Full-Stack Developer',
    period: '2021 - 2023',
    description: [
      'Built MVP from scratch that secured $2M in seed funding',
      'Developed real-time collaboration features using WebSockets',
      'Integrated payment processing with Stripe handling $500K+ transactions',
      'Worked directly with founders on product strategy and technical decisions'
    ],
    technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'Stripe']
  },
  {
    id: '3',
    company: 'Digital Agency Co',
    position: 'Frontend Developer',
    period: '2020 - 2021',
    description: [
      'Delivered 15+ client projects ranging from e-commerce to SaaS platforms',
      'Improved website performance scores from 60 to 95+ on Google Lighthouse',
      'Collaborated with designers to create pixel-perfect responsive interfaces',
      'Established component library reducing development time by 30%'
    ],
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'WordPress', 'Figma']
  },
  {
    id: '4',
    company: 'Freelance',
    position: 'Web Developer',
    period: '2019 - 2020',
    description: [
      'Built custom websites and applications for 20+ clients',
      'Managed entire project lifecycle from requirements to deployment',
      'Achieved 5-star ratings and 100% client satisfaction rate',
      'Specialized in e-commerce and booking systems'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey through the tech world
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <div className="text-lg text-purple-600 font-semibold">
                          {exp.company}
                        </div>
                      </div>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-purple-600 mr-2 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
