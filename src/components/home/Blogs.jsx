import { Calendar, User, Tag } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Renovating a Living Room? Experts Share Their Secrets",
    image: "/img/listing/5.jpg",
    author: "Admin",
    categories: ["Interior", "Room"],
    date: "June 24, 2021",
    link: "#",
  },
  {
    id: 2,
    title: "How to Choose the Right Apartment Layout for Your Family",
    image: "/img/listing/3.jpg",
    author: "Admin",
    categories: ["Design", "Architecture"],
    date: "July 12, 2021",
    link: "#",
  },
  {
    id: 3,
    title: "Minimalist Decor Ideas to Make Your Space Feel Bigger",
    image: "/img/listing/4.jpg",
    author: "Admin",
    categories: ["Home", "Style"],
    date: "August 03, 2021",
    link: "#",
  },

];

export default function Blogs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 sm-title">Blogs </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a4a] mt-2">
            Latest Blogs
          </h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-boxShadow-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-orange-500" /> by: {blog.author}
                  </span>
                  {blog.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-gray-500"
                    >
                      <Tag className="w-4 h-4 text-orange-500" /> {cat}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-4 hover:text-orange-500 cursor-pointer transition-colors">
                  {blog.title}
                </h3>

                {/* Footer */}
                <div className="flex justify-between items-center border-t pt-3 text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {blog.date}
                  </span>
                  <a
                    href={blog.link}
                    className="text-orange-500 font-semibold hover:underline"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
