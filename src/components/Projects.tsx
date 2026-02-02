'use client';

import { useState } from 'react';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'EchoChat',
    description: 'Real-time messaging platform with end-to-end encryption',
    longDescription: 'Built a secure messaging app handling 10K+ daily active users with WebSocket connections, Redis caching, and PostgreSQL. Implemented end-to-end encryption and message threading.',
    tags: ['Next.js', 'WebSocket', 'Redis', 'PostgreSQL', 'Tailwind'],
    image: '/projects/echochat.jpg',
    github: 'https://github.com/username/echochat',
    link: 'https://echochat.demo',
    featured: true,
    year: '2025'
  },
  {
    id: '2',
    title: 'DataViz Pro',
    description: 'Interactive data visualization dashboard for analytics',
    longDescription: 'Created a powerful analytics dashboard with real-time data streaming, custom chart builders, and exportable reports. Reduced load time by 60% through optimizations.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/dataviz.jpg',
    github: 'https://github.com/username/dataviz',
    featured: true,
    year: '2025'
  },
  {
    id: '3',
    title: 'TaskFlow AI',
    description: 'AI-powered project management tool',
    longDescription: 'Integrated OpenAI GPT-4 for smart task prioritization and timeline predictions. Built collaborative features with real-time updates and smart notifications.',
    tags: ['TypeScript', 'OpenAI', 'Prisma', 'Next.js', 'tRPC'],
    image: '/projects/taskflow.jpg',
    link: 'https://taskflow.demo',
    featured: true,
    year: '2024'
  },
  {
    id: '4',
    title: 'PixelPerfect',
    description: 'Design handoff tool for developers',
    longDescription: 'Chrome extension that extracts CSS from any website with pixel-perfect precision. Used by 5K+ developers monthly.',
    tags: ['JavaScript', 'Chrome API', 'CSS', 'React'],
    image: '/projects/pixelperfect.jpg',
    github: 'https://github.com/username/pixelperfect',
    featured: false,
    year: '2024'
  },
  {
    id: '5',
    title: 'CloudSync',
    description: 'File synchronization service',
    longDescription: 'Built a Dropbox-like file sync service with conflict resolution, version history, and selective sync. Handles files up to 5GB.',
    tags: ['Python', 'AWS S3', 'FastAPI', 'PostgreSQL'],
    image: '/projects/cloudsync.jpg',
    featured: false,
    year: '2023'
  },
  {
    id: '6',
    title: 'DevConnect',
    description: 'Social network for developers',
    longDescription: 'Created a developer-focused social platform with code snippet sharing, pair programming rooms, and tech discussions.',
    tags: ['Next.js', 'Supabase', 'WebRTC', 'Tailwind'],
    image: '/projects/devconnect.jpg',
    link: 'https://devconnect.demo',
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
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'featured'
                ? 'bg-purple-600 text-white shadow-lg'
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
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.year}
                  </div>
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                )}
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
                      className="flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
