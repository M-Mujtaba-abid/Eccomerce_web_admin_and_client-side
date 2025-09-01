import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Men",
    description: "Stylish outfits for modern men",
    image: "m.z.jpg",
    hoverImage: "", // 👈 hover image add
    link: "/web/Men",
    btnColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 2,
    title: "Women",
    description: "Latest fashion trends for women",
    image: "perfumeWithLight.jpg",
    hoverImage: "women-hover.jpg",
    link: "/web/Women",
    btnColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    id: 3,
    title: "Children",
    description: "Cute and comfy clothes for kids",
    image: "carosel.jpg",
    hoverImage: "children-hover.jpg",
    link: "/web/Children",
    btnColor: "bg-green-600 hover:bg-green-700",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our best collections for everyone
          </p>
        </div>

        {/* Category Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }} // 👈 niche se start
              whileInView={{ opacity: 1, y: 0 }} // 👈 scroll pe upar aayega
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              {/* Normal Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-56 sm:h-72 lg:h-[400px] object-cover transform transition duration-500 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={cat.hoverImage}
                alt={`${cat.title} Hover`}
                className="w-full h-56 sm:h-72 lg:h-[400px] object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                  {cat.title}
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 mb-4">
                  {cat.description}
                </p>
                <Link
                  to={cat.link}
                  className={`px-3 sm:px-4 py-2 ${cat.btnColor} text-white text-sm sm:text-base rounded-lg shadow-md transition`}
                >
                  Shop {cat.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
