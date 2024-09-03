import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog{
    "context":string,
    "title":string,
    "id":string,
    "author":{
        "name":string
    }
}
export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

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

