'use client';

import { useState } from 'react';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'CKCCRN Web Application',
    description: 'Full-stack web application for church community',
    longDescription: 'Developed a comprehensive web application using Next.js framework with responsive design for optimal user experience across all devices. Implemented modern React patterns and deployed on Vercel platform for reliable performance.',
    tags: ['Next.js', 'React', 'JavaScript', 'Vercel', 'Responsive Design'],
    image: '/projects/ckccrn-web.png',
    link: 'https://ckccrnapp.vercel.app',
    featured: true,
    year: '2024'
  },
  {
    id: '2',
    title: 'CKCCRN Mobile Application',
    description: 'Cross-platform mobile app built with Flutter',
    longDescription: 'Built a feature-rich mobile application using Flutter framework for both iOS and Android platforms. Designed intuitive user interface following Material Design principles and managed version control through GitHub.',
    tags: ['Flutter', 'Dart', 'Mobile Development', 'Material Design', 'Cross-platform'],
    image: '/projects/ckccrn-mobile.png',
    github: 'https://github.com/timzydProgrammer/ckccrn_app',
    featured: true,
    year: '2024'
  },
  {
    id: '3',
    title: 'TEDxUNIZIK Marketing Campaign',
    description: 'Complete marketing strategy for TEDx event',
    longDescription: 'Led comprehensive marketing and public relations campaign for the inaugural TEDxUNIZIK Fireworks event. Created engaging visual content including graphics, promotional videos, and presentation materials that contributed to making it a landmark university event.',
    tags: ['Marketing', 'Graphic Design', 'Video Production', 'Event Management', 'PowerPoint'],
    image: '/projects/tedx.png',
    link: 'https://wa.link/2e6q7h',
    featured: true,
    year: '2023'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Modern portfolio built with Next.js',
    longDescription: 'Designed and developed this responsive portfolio website showcasing my projects and skills. Built with Next.js 16, TypeScript, and Tailwind CSS for optimal performance and SEO.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive', 'SEO'],
    image: '/projects/portfolio.png',
    github: 'https://github.com/timdbuilder/mytimfolio',
    link: 'https://mytimfolio.vercel.app',
    featured: false,
    year: '2026'
  },
  {
    id: '5',
    title: 'Whiteboard Animation Videos',
    description: 'Explainer videos and animated content',
    longDescription: 'Created engaging whiteboard animation videos for various clients, transforming complex ideas into clear visual stories. Specialized in educational content and business explainer videos.',
    tags: ['Animation', 'Video Production', 'Storytelling', 'Creative Design'],
    image: '/projects/whiteboard.png',
    link: 'https://www.youtube.com/watch?v=qJkxogQmbi8',
    featured: false,
    year: '2023'
  },
  {
    id: '6',
    title: 'Engineering Documentation',
    description: 'Technical presentations and reports',
    longDescription: 'Developed professional PowerPoint presentations and technical documentation for civil engineering projects. Combined engineering knowledge with design skills for clear communication of complex structural concepts.',
    tags: ['PowerPoint', 'Technical Writing', 'AutoCAD', 'Data Visualization'],
    image: '/projects/engineering.png',
    link: 'https://wa.link/2e6q7h',
    featured: false,
    year: '2023'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Things I've Built
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects I'm proud of. Each one taught me something new.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'featured'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Featured
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 relative overflow-hidden bg-gray-200">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.year}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                )}
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {project.year}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
