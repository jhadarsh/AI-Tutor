import CardSwap, { Card } from "../Bits/CardSwap";
import FeaturesSection from "../components/FeaturesSection";
import OurMentors from "../components/OurMentors";
import BlurText from "../Bits/BlurText";

export default function Home() { 
  return (
    <>
      <div className="min-h-screen pt-10 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div
          className="text-white flex  flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-10 space-y-10 lg:space-y-0 
                  -translate-y-10 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24"
        >
          {/* Left Section */}
          <div className="flex flex-col items-center justify-center text-center w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition duration-500 hover:text-blue-400">
              <BlurText
                text="Wellcome To EduAI"
                
                delay={150}
                animateBy="words"
                direction="top"
                
                className="text-4xl "
              />
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md transition duration-500 hover:text-white">
              Your AI-powered learning platform for mastering Physics,
              Chemistry, Maths, English, and more with interactive AI tutors.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Right Section - CardSwap shifted slightly left for better visual balance */}
          <div
            className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] 
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
              relative flex items-center justify-center 
              translate-x-0 sm:translate-x-[-20px] md:translate-x-[-40px] lg:translate-x-[-90px] xl:translate-x-[-80px]"
          >
            <div
              className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] 
                      w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
                      relative flex items-center justify-center 
                      translate-x-[-150px] sm:translate-x-[-40px] md:translate-x-[-60px] lg:translate-x-[-80px]"
            >
              <CardSwap
                cardDistance={50}
                verticalDistance={50}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <div className="flex flex-col h-full w-full overflow-hidden rounded-xl border border-white bg-black">
                    <div className="h-1/2 w-full">
                      <img
                        src="https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg"
                        alt="Physics"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center p-4 space-y-2">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Physics Fundamentals
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Explore forces, motion, and energy in daily life.
                      </p>
                      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col h-full w-full overflow-hidden rounded-xl border border-white bg-black">
                    <div className="h-1/2 w-full">
                      <img
                        src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg"
                        alt="Math"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center p-4 space-y-2">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Mathematics Made Simple
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Master algebra, geometry, and essential math tricks.
                      </p>
                      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col h-full w-full overflow-hidden rounded-xl border border-white bg-black">
                    <div className="h-1/2 w-full">
                      <img
                        src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
                        alt="Chemistry"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center p-4 space-y-2">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        Chemistry Concepts
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Understand reactions, periodic tables, and real-world
                        chemistry.
                      </p>
                      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        <FeaturesSection />
      </div>

      <OurMentors />
    </>
  );
}
