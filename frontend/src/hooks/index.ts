interface Author {
    name: string;
  }
  
  interface Blog {
    context: string;
    title: string;
    id: string;
    author: Author;
  }
  
  interface BlogsResponse {
    blogs: Blog[];
  }
  
  interface BlogResponse {
    blog: Blog;
  }

  import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get<BlogsResponse>(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response: AxiosResponse<BlogsResponse>) => {
      setBlogs(response.data.blogs);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Failed to fetch blogs:", error);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    blogs,
  };
};


export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>({
        title:"",
        context:"",
        id: "",
        author:{
            name:""
        }
    });

    useEffect(()=>{
        axios.get<BlogResponse>(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((response: AxiosResponse<BlogResponse>) => {
            setBlog(response.data.blog);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Failed to fetch blogs:", error);
            setLoading(false);
          });
        }, [id]);
      
        return {
          loading,
          blog,
        };
      };
