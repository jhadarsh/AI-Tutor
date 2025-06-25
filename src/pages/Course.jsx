import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import BlurPopup from "../components/BlurPopup";
import AnimatedList from "../Bits/AnimatedList";
import { useNavigate } from "react-router-dom";

const items = [
  "Thermodynamics",
  "Physical World",
  "Units and Measurements",
  "Motion in a Straight Line",
  "Motion in a Plane",
  "Laws of Motion",
  "Work, Energy and Power",
  "System of Particles and Rotational Motion",
  "Gravitation",
  "Mechanical Properties of Solids",
  "Mechanical Properties of Fluids",
  "Thermal Properties of Matter",
  "Kinetic Theory of Gases",
  "Oscillations",
  "Waves",
];

const courses = [
  {
    id: 1,
    title: "Physics Fundamentals",
    description: "Explore forces, motion, and energy in daily life.",
    image:
      "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg",
    category: "Science",
  },
  {
    id: 2,
    title: "Mathematics Made Simple",
    description: "Master algebra, geometry, and essential math tricks.",
    image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg",
    category: "Math",
  },
  {
    id: 3,
    title: "Chemistry Concepts",
    description:
      "Understand reactions, periodic tables, and real-world chemistry.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    category: "Science",
  },
  {
    id: 4,
    title: "English Communication",
    description: "Improve grammar, vocabulary, and speaking skills.",
    image: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg",
    category: "Language",
  },
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const navigate = useNavigate();

  const handleNavigate = (items) => {
    console.log(courses[0].title);
    const subject = courses[0].title; // or dynamic subject if needed
    const chapterSlug = items.toLowerCase().replace(/\s+/g, "-"); // convert to URL-friendly slug
    navigate(`/courses/${subject}/${chapterSlug}`);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const handleOpenPopup = (title) => {
    setPopupTitle(title);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-600 border-blue-600"
                : "border-gray-600"
            } hover:bg-blue-500 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-black border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-blue-600 transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300 text-sm">{course.description}</p>

              <div className="mt-4 flex items-center gap-2">
                <button
                  className={` text-white px-4 py-2 rounded-md ${
                    course.title !== "Physics Fundamentals"
                      ? "bg-gray-500 hover:bg-gray-200 opacity-50 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  onClick={() => {
                    if (course.title === "Physics Fundamentals") {
                      handleOpenPopup(course.title);
                    }
                  }}
                >
                  {course.title !== "Physics Fundamentals"
                    ? "Enroll Now"
                    : "Continue"}
                </button>

                {course.title !== "Physics Fundamentals" && (
                  <FiLock className="text-yellow-400" size={18} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blur Popup */}
      <BlurPopup show={showPopup} onClose={() => setShowPopup(false)}>
        <h2 className="text-2xl font-bold mb-4">{popupTitle}</h2>
        <p className="text-gray-300">Choose Your Chapter For Learn !!</p>
        <AnimatedList
          items={items}
          onItemSelect={(items) => {
            if (items === "Thermodynamics") {
              console.log("calling navigate");
              console.log(items);
              handleNavigate(items);
            }
          }}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={false}
        />
        <button
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </BlurPopup>
    </div>
  );
};

export default CoursesPage;
