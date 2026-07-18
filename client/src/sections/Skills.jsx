function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">

      <div className="max-w-7xl mx-auto px-6 py-2">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl my-5">
            Skills
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Skills Container */}
        <div className="grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6

          py-8"
          >

          {/* Skill Card 1 */}
          <div className="
            border 
            rounded-2xl 
            p-4
            min-h-[280px]
            shadow-md
            hover:shadow-xl 
            transition-all 
            duration-300"
            >
            <h2 className="text-xl font-bold mb-4">
              Frontend
            </h2>

            {/* Skill 1 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">HTML</span>
                <span className="text-gray-500">90%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[90%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">CSS</span>
                <span className="text-gray-500">85%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[85%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">JavaScript</span>
                <span className="text-gray-500">80%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[80%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">React</span>
                <span className="text-gray-500">75%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[75%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

          </div>
           

          {/* Skill Card 2 */}
          <div className="
            border 
            rounded-2xl 
            p-4
            min-h-[280px]
            shadow-md
            hover:shadow-xl 
            transition-all 
            duration-300"
            >
            <h2 className="text-xl font-bold mb-4">
              Backend
            </h2>

            {/* Skill 1 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Node.js</span>
                <span className="text-gray-500">75%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[75%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Express.js</span>
                <span className="text-gray-500">70%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[70%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">MongoDB</span>
                <span className="text-gray-500">70%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[70%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">REST API</span>   
                <span className="text-gray-500">75%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[75%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

          </div>

          {/* Skill Card 3 */}
          <div className="
            border 
            rounded-2xl 
            p-4
            min-h-[280px]
            shadow-md
            hover:shadow-xl 
            transition-all 
            duration-300"
            >
            <h2 className="text-xl font-bold mb-4">
              Programming
            </h2>

            {/* Skill 1 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Java</span>
                <span className="text-gray-500">80%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[80%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">DSA</span>
                <span className="text-gray-500">70%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[70%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">OOP</span>
                <span className="text-gray-500">80%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[80%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">SQL</span>
                <span className="text-gray-500">70%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[70%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

          </div>

          {/* Skill Card 4 */}
          <div className="
            border 
            rounded-2xl 
            p-4
            min-h-[280px]
            shadow-md
            hover:shadow-xl 
            transition-all 
            duration-300"
            >
            <h2 className="text-xl font-bold mb-4">
              Tools
            </h2>

            {/* Skill 1 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Git & GitHub</span>
                <span className="text-gray-500">80%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[80%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">VS Code</span>
                <span className="text-gray-500">90%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[90%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Postman</span>
                <span className="text-gray-500">70%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[70%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Linux</span>
                <span className="text-gray-500">75%</span>
              </div>

              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-1.5 w-[75%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;