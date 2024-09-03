import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blogs{
    "context":string,
    "title":string,
    "id":string,
    "author":{
        "name":string
    }
}
export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blogs[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then(response =>{
            setBlogs(response.data.blogs);
            setLoading(false)
        })
            
        
    },[])
    return{
        loading,
        blogs
    }
}





export const useBlog = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blogs[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id} `,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then(response =>{
            console.log(response.data)
            setBlog(response.data.blog);
            setLoading(false)
        })
            
        
    },[id])
    return{
        loading,
        blog
    }
}

