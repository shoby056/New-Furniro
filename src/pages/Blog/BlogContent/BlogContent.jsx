import React from "react";
import "./BlogContent.css";

const blogPosts = [
  {
    id: 1,
    image: "/assets/images/Blog/Laptop.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood",
    title: "Going all-in with millennial design",
  },
  {
    id: 2,
    image: "/assets/images/Blog/Pen.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Handmade",
    title: "Exploring new ways of decorating",
  },
  {
    id: 3,
    image: "/assets/images/Blog/Book.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood",
    title: "Handmade pieces that took time to make",
  },
];

const recentPosts = [
  {
    image: "/assets/images/Blog/one.png",
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
  },
  {
    image: "/assets/images/Blog/two.png",
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    image: "/assets/images/Blog/three.png",
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
  },
  {
    image: "/assets/images/Blog/four.png",
    title: "Modern home in Milan",
    date: "03 Aug 2022",
  },
  {
    image: "/assets/images/Blog/five.png",
    title: "Colorful office redesign",
    date: "03 Aug 2022",
  },
];

function BlogContent() {
  return (
    <section className="blog-content">
      <div className="blog-content-container">

        {/* LEFT SIDE */}
        <div className="blog-posts">

          {blogPosts.map((post) => (
            <div className="blog-post" key={post.id}>

              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />

              <div className="blog-post-meta">
                <span>♟ {post.author}</span>
                <span>▣ {post.date}</span>
                <span>◆ {post.category}</span>
              </div>

              <h2>{post.title}</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Mus mauris vitae ultricies leo integer malesuada
                nunc. In nulla posuere sollicitudin aliquam ultrices.
                Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                Libero enim sed faucibus turpis in eu mi bibendum neque.
              </p>

              <button className="blog-read-more">
                Read more
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="blog-sidebar">

          {/* Search */}
          <div className="blog-search">
            <input type="text" />
            <button>⌕</button>
          </div>

          {/* Categories */}
          <div className="blog-sidebar-section">
            <h3>Categories</h3>

            <div className="blog-category">
              <span>Crafts</span>
              <span>2</span>
            </div>

            <div className="blog-category">
              <span>Design</span>
              <span>8</span>
            </div>

            <div className="blog-category">
              <span>Handmade</span>
              <span>7</span>
            </div>

            <div className="blog-category">
              <span>Interior</span>
              <span>1</span>
            </div>

            <div className="blog-category">
              <span>Wood</span>
              <span>6</span>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="blog-sidebar-section">
            <h3>Recent Posts</h3>

            {recentPosts.map((post, index) => (
              <div className="recent-blog-post" key={index}>

                <img
                  src={post.image}
                  alt={post.title}
                />

                <div>
                  <h4>{post.title}</h4>
                  <span>{post.date}</span>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default BlogContent;