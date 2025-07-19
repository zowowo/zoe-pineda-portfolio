import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Why I Love Building with React",
    date: "2025-07-10",
    excerpt: "React lets me create beautiful, interactive UIs with ease. Here are some reasons why it's my go-to framework...",
    thumbnail: "/src/assets/projects/agrika.png",
    gallery: [
      "/src/assets/projects/agrika.JPG",
      "/src/assets/projects/bibekalma.png"
    ],
    content: "React lets me create beautiful, interactive UIs with ease. Here are some reasons why it's my go-to framework: component-based architecture, fast rendering, and a huge ecosystem. I love experimenting with hooks and context for state management.",
  },
  {
    title: "My Journey into Cloud Computing",
    date: "2025-06-22",
    excerpt: "Cloud tech has changed the way I think about scalability and reliability. This is how I got started...",
    thumbnail: "/src/assets/projects/loro.png",
    gallery: [
      "/src/assets/projects/haste-urant.png",
      "/src/assets/projects/project1.png"
    ],
    content: "Cloud computing opened up a world of possibilities for me. I started with AWS and GCP, learning about scalable infrastructure and serverless functions. Now I deploy most of my projects to the cloud for reliability and speed.",
  },
  {
    title: "Thoughts on UI/UX Design",
    date: "2025-05-30",
    excerpt: "Design isn't just about looks—it's about how things feel and work. Here are my thoughts on creating great user experiences...",
    thumbnail: "/src/assets/skills/figma.svg",
    gallery: [
      "/src/assets/projects/project2.png",
      "/src/assets/projects/project3.png"
    ],
    content: "UI/UX design is about empathy and understanding users. I love prototyping in Figma and testing designs with real people. Good design solves problems and makes technology accessible.",
  },
];

import { useState } from "react";

export const Blogs = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="blogs" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary">Blog</span>{" "}
          <span className="text-foreground">Posts & Thoughts</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="bg-card rounded-xl shadow-lg p-0 flex flex-col justify-between border border-primary/20 hover:shadow-2xl hover:border-primary transition-all duration-300 cursor-pointer"
              onClick={() => setOpenIdx(idx)}
            >
              {/* Thumbnail */}
              {post.thumbnail && (
                <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover rounded-t-xl mb-3" />
              )}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-md text-foreground mb-4">{post.excerpt}</p>
                {post.gallery && post.gallery.length > 0 && (
                  <div className="flex gap-2 mt-2 overflow-x-auto">
                    {post.gallery.map((img, i) => (
                      <img key={i} src={img} alt="Gallery" className="w-16 h-16 object-cover rounded-lg border border-primary/20" />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for full post */}
        {openIdx !== null && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="bg-card rounded-xl shadow-2xl p-8 max-w-lg w-full relative"
            >
              <button
                className="absolute top-4 right-4 text-primary text-xl font-bold"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                ×
              </button>
              {blogPosts[openIdx].thumbnail && (
                <img src={blogPosts[openIdx].thumbnail} alt={blogPosts[openIdx].title} className="w-full h-48 object-cover rounded-lg mb-4" />
              )}
              <h3 className="text-2xl font-bold text-primary mb-2">{blogPosts[openIdx].title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{new Date(blogPosts[openIdx].date).toLocaleDateString()}</p>
              <p className="text-md text-foreground mb-4 whitespace-pre-line">{blogPosts[openIdx].content}</p>
              {blogPosts[openIdx].gallery && blogPosts[openIdx].gallery.length > 0 && (
                <div className="flex gap-2 mt-2 overflow-x-auto">
                  {blogPosts[openIdx].gallery.map((img, i) => (
                    <img key={i} src={img} alt="Gallery" className="w-24 h-24 object-cover rounded-lg border border-primary/20" />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
