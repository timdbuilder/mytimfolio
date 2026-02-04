'use client';

import { Skill } from '@/types';

const skills: Skill[] = [
  {
    category: 'Web Development',
    items: ['Next.js', 'React.js', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Vercel']
  },
  {
    category: 'Mobile Development',
    items: ['Flutter', 'Dart', 'Cross-platform', 'Material Design', 'iOS', 'Android']
  },
  {
    category: 'Design & Multimedia',
    items: ['Graphic Design', 'Whiteboard Animation', 'PowerPoint', 'Video Editing', 'Branding']
  },
  {
    category: 'Engineering',
    items: ['Structural Analysis', 'AutoCAD', 'Project Management', 'Construction', 'Technical Documentation']
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Engineering Software']
  },
  {
    category: 'Marketing & Communication',
    items: ['Digital Marketing', 'Event Coordination', 'Campaign Strategy', 'Stakeholder Engagement']
  }
];

const softSkills = [
  { skill: 'Problem Solving', level: 95 },
  { skill: 'Communication', level: 88 },
  { skill: 'Team Collaboration', level: 92 },
  { skill: 'Adaptability', level: 90 },
  { skill: 'Time Management', level: 85 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            My Toolkit
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I work with and skills I bring to the table
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills with Progress Bars */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Beyond The Code
          </h3>
          <div className="space-y-6">
            {softSkills.map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{item.skill}</span>
                  <span className="text-blue-600 font-bold">{item.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold mb-1">Fast</div>
            <div className="text-sm opacity-90">Learner</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-bold mb-1">Detail</div>
            <div className="text-sm opacity-90">Oriented</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-3xl font-bold mb-1">Ship</div>
            <div className="text-sm opacity-90">Fast</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl text-white">
            <div className="text-4xl mb-2">💬</div>
            <div className="text-3xl font-bold mb-1">Clear</div>
            <div className="text-sm opacity-90">Communicator</div>
          </div>
        </div>
      </div>
    </section>
  );
}
