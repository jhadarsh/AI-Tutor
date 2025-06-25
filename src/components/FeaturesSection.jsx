import SpotlightCard from "../Bits/SpotlightCard";
export default function FeaturesSection() {
  return (
    <div className="py-16 px-6 md:px-20  text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Our Features
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Unlock powerful tools designed to make learning interactive, engaging,
          and AI-driven.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Feature Card */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 0, 234, 0.27)"
        >
          <h3 className="text-xl font-semibold mb-2">AI Tutors</h3>
          <p className="text-gray-400">
            Learn with interactive AI avatars that explain concepts in
            real-time.
          </p>
        </SpotlightCard>
           <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 0, 234, 0.27)"
        >
          <h3 className="text-xl font-semibold mb-2">AI Tutors</h3>
          <p className="text-gray-400">
            Learn with interactive AI avatars that explain concepts in
            real-time.
          </p>
        </SpotlightCard>
           <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 0, 234, 0.27)"
        >
          <h3 className="text-xl font-semibold mb-2">AI Tutors</h3>
          <p className="text-gray-400">
            Learn with interactive AI avatars that explain concepts in
            real-time.
          </p>
        </SpotlightCard>
           <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 0, 234, 0.27)"
        >
          <h3 className="text-xl font-semibold mb-2">AI Tutors</h3>
          <p className="text-gray-400">
            Learn with interactive AI avatars that explain concepts in
            real-time.
          </p>
        </SpotlightCard>
           <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 0, 234, 0.27)"
        >
          <h3 className="text-xl font-semibold mb-2">AI Tutors</h3>
          <p className="text-gray-400">
            Learn with interactive AI avatars that explain concepts in
            real-time.
          </p>
        </SpotlightCard>
           <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 0, 234, 0.27)"
        >
          <h3 className="text-xl font-semibold mb-2">AI Tutors</h3>
          <p className="text-gray-400">
            Learn with interactive AI avatars that explain concepts in
            real-time.
          </p>
        </SpotlightCard>
       


       
      </div>
    </div>
  );
}
