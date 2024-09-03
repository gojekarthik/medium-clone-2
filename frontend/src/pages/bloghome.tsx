import { Link } from "react-router-dom";
import { Appbar } from "../components/appbar";
import { BlogCard } from "../components/blogCard";
import { useBlogs } from "../hooks/index";

export function BlogHome() {
  const {loading,blogs} = useBlogs();
  console.log(blogs)
if(loading){
  return <div>
    laoding...
  </div>
}

  return (
    <div className="w-full">
      <Appbar btnType="New Blog"/>
      
      <div className="mx-auto px-3 max-w-3xl">
      {blogs.map(blog=> <Link to={"/blog/"+blog.id}><BlogCard
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          context={blog.context}
          publishedDate="2nd Sep,2024"
        /></Link>)}
      </div>
      
    </div>
  );
}
