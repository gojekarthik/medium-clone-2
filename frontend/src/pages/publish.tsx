import { useState } from "react";
import { Appbar } from "../components/appbar";
import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../config";

interface PublishPost {
  title: string;
  context: string;
}

export const Publish = () => {
  const [post, setPost] = useState<PublishPost>({
    title: "",
    context: "",
  });

  async function handleClick(){
    await axios.post<AxiosResponse>(`${BACKEND_URL}/api/v1/blog/create`,post,{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    })
        }
  return (
    <div>
      <Appbar btnType="Publish"></Appbar>
      <div className="flex flex-col justify-center m-12 px-52">
        <div className="pb-10">
          <textarea
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
            rows={1}
            className="block p-2.5 w-full text-sm text-black bgdar-black rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 k:bg-black  "
            placeholder="Give Your Blog a Title.."
          ></textarea>
        </div>
        <div className="pb-10">
          <textarea
            onChange={(e) => {
              setPost({ ...post, context: e.target.value });
            }}
            rows={6}
            className="block p-2.5 w-full text-sm text-black bgdar-black rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 k:bg-black  "
            placeholder="Give Your Blog a Title.."
          ></textarea>
        </div>
        <button
            onClick={handleClick}
          type="button"
          className="w-24 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm  py-3  text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

