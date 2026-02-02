export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Not Your Average Developer
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm not going to bore you with "passionate about technology" clichés. 
                The truth? I love solving problems that matter, and I happen to do it with code.
              </p>
              <p className="text-lg">
                Started coding at 14 when I tried to build a game mod and accidentally 
                learned JavaScript. Fast forward to today, I've shipped products used by 
                thousands, broken production (and fixed it), and learned that the best 
                code is the code that gets deleted.
              </p>
              <p className="text-lg">
                When I'm not debugging or shipping features, you'll find me brewing 
                the perfect espresso, contributing to open source, or convincing my 
                cat that my keyboard is not a bed.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Shipped</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="text-3xl font-bold text-pink-600">5</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">∞</div>
                <div className="text-sm text-gray-600 mt-1">Coffee Consumed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🎯</span>
                  <div>
                    <strong>Focus:</strong> Building products that users actually want to use
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">⚡</span>
                  <div>
                    <strong>Superpower:</strong> Turning complex requirements into simple solutions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🚀</span>
                  <div>
                    <strong>Mission:</strong> Write less code, solve more problems
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">💡</span>
                  <div>
                    <strong>Belief:</strong> Good UX is not optional
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🎮</span>
                  <div>
                    <strong>After Hours:</strong> Gaming, reading sci-fi, tinkering with side projects
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
