 
export default function OurMentors() {
  return (
    <div className="py-16 px-6 md:px-20 bg-black text-white">
      
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Meet Our Mentors
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Learn from the best — experienced educators guiding you at every step.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Mentor Card */}
        <div className="relative rounded-3xl border border-white bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Mentor 1"
            className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-white"
          />
          <h3 className="text-xl font-semibold">Mr. Rahul Sharma</h3>
          <p className="text-gray-400">Physics Expert | 10+ Years Experience</p>
        </div>

        <div className="relative rounded-3xl border border-white bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Mentor 2"
            className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-white"
          />
          <h3 className="text-xl font-semibold">Dr. Anjali Mehta</h3>
          <p className="text-gray-400">Chemistry Mentor | IIT Alumni</p>
        </div>

        <div className="relative rounded-3xl border border-white bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition">
          <img
            src="https://randomuser.me/api/portraits/men/64.jpg"
            alt="Mentor 3"
            className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-white"
          />
          <h3 className="text-xl font-semibold">Prof. Arjun Verma</h3>
          <p className="text-gray-400">Mathematics Specialist | Olympiad Coach</p>
        </div>

      </div>
    </div>
  );
}
