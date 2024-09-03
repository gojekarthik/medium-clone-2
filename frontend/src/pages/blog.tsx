import { Appbar } from "../components/appbar";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";

export function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  console.log(blog);

  if (loading) {
    return (
      <div className="w-full">
        <Appbar btnType="New B" />
        <div className="flex">
          <div className="grid w-2/3 px-4">
            <div className="font-extrabold text-5xl p-4 bg-gray-300 h-12 animate-pulse"></div>
            <div className="text-gray-500 text-md p-4 bg-gray-200 h-6 animate-pulse"></div>
            <div className="text-lg p-4 bg-gray-100 h-32 animate-pulse"></div>
          </div>
          <div className="flex w-1/3 h-60 flex-col">
            <div className="text-sm my-3 h-6 bg-gray-200 animate-pulse"></div>
            <div className="font-extrabold text-xl bg-gray-300 h-8 animate-pulse"></div>
            <div className="text-gray-500 bg-gray-100 h-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Appbar btnType="New B" />
      <div className="flex">
        <div className="grid w-2/3 px-4">
          <div className="font-extrabold text-5xl p-4">{blog.title}</div>
          <div className="text-gray-500 text-md p-4">Published on Aug 15, 2009</div>
          <div className="text-lg p-4">{blog.context}</div>
        </div>
        <div className="flex w-1/3 h-60 flex-col">
          <div className="text-sm my-3 h-6">Author</div>
          <div className="font-extrabold text-xl">{blog.author.name}</div>
          <div className="text-gray-500">Master of bla bla and the great guy bla bla</div>
        </div>
      </div>
    </div>
  );
}
