import { Link } from "react-router-dom";
import { Appbar } from "../components/appbar";
import { BlogCard } from "../components/blogCard";
import { useBlogs } from "../hooks/index";

export function BlogHome() {
  const { loading, blogs } = useBlogs();

  console.log(blogs);
  if (loading) {
    return (
      <div className="w-full">
        <Appbar btnType="New Blog" />
        <div className="mx-auto px-3 max-w-3xl">
          {/* Skeleton Loaders */}
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="animate-pulse flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg my-4"
            >
              <div className="h-6 bg-gray-300 rounded w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Appbar btnType="New Blog" />
      <div className="mx-auto px-3 max-w-3xl">
        {blogs.map((blog) => (
          <Link key={blog.id} to={"/blog/" + blog.id}>
            <BlogCard
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              context={blog.context}
              publishedDate="2nd Sep,2024"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
