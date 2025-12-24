import React from "react";
import Blog1 from "../../../../assets/images/Resourses/blog1.png";
import Blog2 from "../../../../assets/images/Resourses/blog2.png";
import Blog3 from "../../../../assets/images/Resourses/blog3.png";
import Blog4 from "../../../../assets/images/Resourses/blog4.png";
import Blog5 from "../../../../assets/images/Resourses/blog5.png";
import Blog6 from "../../../../assets/images/Resourses/blog6.png";
import Blog7 from "../../../../assets/images/Resourses/blog7.png";
import Blog8 from "../../../../assets/images/Resourses/blog8.png";
import Blog9 from "../../../../assets/images/Resourses/blog9.png";








interface BlogItem {
  id: number;
  title: string;
  image: string;
  author: string;
}

const blogs: BlogItem[] = [
  {
    id: 1,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image:Blog1,
    author: "Rahul",
  },
  {
    id: 2,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog2,
    author: "Rahul",
  },
  {
    id: 3,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog3,
    author: "Rahul",
  },
  {
    id: 4,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog4,
    author: "Rahul",
  },
  {
    id: 5,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image:Blog5,
    author: "Rahul",
  },
  {
    id: 6,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog6,
    author: "Rahul",
  },
  {
    id: 7,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog7,
    author: "Rahul",
  },
  {
    id: 8,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog8,
    author: "Rahul",
  },
  {
    id: 9,
    title:
      "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
    image: Blog9,
    author: "Rahul",
  },
];

const BlogList: React.FC = () => {
  return (
    <section className="py-20 ">
      <div className="main-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group cursor-pointer rounded-2xl p-5 bg-transparent hover:bg-[#29292950] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 "

            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-50 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"

                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-xl font-medium text-white leading-snug mb-6 transition-colors duration-500 group-hover:text-white"

                >
                  {blog.title}
                </h3>

                <span
                  className="inline-block mb-6 text-sm font-medium text-white/90 bg-white/10 py-2  px-4 rounded transition-all duration-500 group-hover:bg-white/15"

                >
                  By {blog.author}
                </span>
              </div>
            </article>


          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
