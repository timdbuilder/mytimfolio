export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Engineering Student. Software Developer. Creative Designer.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a final year Civil Engineering student at Nnamdi Azikiwe University who discovered 
                a passion for software development. Currently pursuing a second degree in Computer Science 
                at University of the People while building real-world applications.
              </p>
              <p className="text-lg">
                My journey combines structural engineering principles with modern software development. 
                I've built full-stack web applications with Next.js and cross-platform mobile apps with 
                Flutter, while also creating engaging visual content through graphic design and whiteboard animation.
              </p>
              <p className="text-lg">
                Based in Onitsha, Nigeria, I'm passionate about using technology to solve problems and 
                create meaningful digital experiences. When I'm not coding or designing, I'm coordinating 
                events, creating marketing content, or exploring new ways to bridge engineering and technology.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600 mt-1">Degrees Pursuing</div>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <div className="text-3xl font-bold text-blue-700">500</div>
                <div className="text-sm text-gray-600 mt-1">Engineering Level</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">∞</div>
                <div className="text-sm text-gray-600 mt-1">Projects Built</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/passport.png" 
                  alt="Timothy Ezeani" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </div>

            {/* Quick Facts */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">�</span>
                  <div>
                    <strong>Education:</strong> Civil Engineering @ NAU | Computer Science @ UoPeople
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">💻</span>
                  <div>
                    <strong>Tech Stack:</strong> Next.js, Flutter, React - building web & mobile apps
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🎨</span>
                  <div>
                    <strong>Creative Side:</strong> Graphic design, whiteboard animation, presentation design
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">📍</span>
                  <div>
                    <strong>Location:</strong> Onitsha, Anambra State, Nigeria
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🎯</span>
                  <div>
                    <strong>Mission:</strong> Bridge engineering and technology to create impactful solutions
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
