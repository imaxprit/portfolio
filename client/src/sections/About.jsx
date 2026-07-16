

function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center text-4xl md:text-5xl lg:text-6xl mb-10">
            {/* Heading */}
            <h1>About Me</h1>
        </div>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        <div className="pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
           
            {/* Left */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Who am I?</h2>

              <p className="text-gray-600 leading-8 mb-6 max-w-xl">
                I am an MCA student passionate about Full Stack Web Development. 
                I enjoy building modern web applications using the MERN stack and 
                continuously improving my problem-solving skills.
              </p>

              <p className="text-gray-600 leading-8 mb-6 max-w-xl">
                I enjoy turning ideas into real-world web applications and continuously 
                learning modern technologies. I believe in writing clean, scalable code 
                and building projects that solve real problems.
              </p>
            </div>


            {/* Right */}
            <div className="flex items-center w-full">

              {/* Cards Container */}
              <div className="grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
                w-full"
              >

                {/* Card 1 */}
                <div className="
                  border border-gray-400
                  rounded-xl
                  p-6
                  min-h-[140px]
                  flex
                  flex-col
                  transition
                  duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  ">
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p className="text-gray-600">MCA @ AKTU</p>
                </div>

                {/* Card 2 */}
                <div className="
                  border border-gray-400
                  rounded-xl
                  p-6
                  min-h-[140px]
                  flex
                  flex-col
                  transition
                  duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  ">
                  <h3 className="font-bold text-lg mb-2">Focus</h3>
                  <p className="text-gray-600">Full Stack MERN</p>
                </div>

                {/* Card 3 */}
                <div className="
                  border border-gray-400
                  rounded-xl
                  p-6
                  min-h-[140px]
                  flex
                  flex-col
                  transition
                  duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  ">
                  <h3 className="font-bold text-lg mb-2">Problem Solving</h3>
                  <p className="text-gray-600">Java + DSA</p>
                </div>

                {/* Card 4 */}
                <div className="
                  border border-gray-400
                  rounded-xl
                  p-6
                  min-h-[140px]
                  flex
                  flex-col
                  transition
                  duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  ">  
                  <h3 className="font-bold text-lg mb-2">Based In</h3>
                  <p className="text-gray-600">Lucknow, UP, India</p>
                </div>
              </div>

            </div>
          
        </div>
      </div>
      
    </section>
  );
}

export default About;