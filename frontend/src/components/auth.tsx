import { SignupInput } from "@medium-common-module/medium-common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });


const buttonHandler = async ()=>{
  const response = await axios.post(
    BACKEND_URL + "/api/v1/user/" + (type === "signup" ? "signup" : "signin"),
    postInputs
  );
  navigate('/blog')
}


  return (
    <div className=" h-screen flex justify-center items-center flex-col">
      <div className="text-4xl font-extrabold text-left ">
        {type === "signup" ? (
          <div>Create An Account</div>
        ) : (
          <div>Singin To Your Account</div>
        )}
      </div>
      <div className="text-slate-400 p-3">
        {type === "signup" ? (
          <div>
            Already have an account?
            <Link className="underline" to={"/signin"}>
              {" "}
              Login
            </Link>
          </div>
        ) : (
          <div>
            Dont Have an Account?
            <Link className="underline" to={"/signup"}>
              {" "}
              Signup
            </Link>
          </div>
        )}
      </div>
      {type === "signup" && (
        <LableInput
          lable="Username"
          placeholder="john"
          type="text"
          onchange={(e) => {
            setPostInputs({
              ...postInputs,
              name: e.target.value,
            });
          }}
        />
      )}
      <LableInput
        lable="Email"
        placeholder="johndoe@email.com"
        type="text"
        onchange={(e) => {
          setPostInputs({
            ...postInputs,
            email: e.target.value,
          });
        }}
      />
      <LableInput
        lable="Password"
        placeholder=""
        type="password"
        onchange={(e) => {
          setPostInputs({
            ...postInputs,
            password: e.target.value,
          });
        }}
      />
      <button onClick={buttonHandler} className="bg-black   text-white p-1 rounded-md">
        {type === "signup" ? "Sign Up" : "Sign in"}
      </button>
    </div>
  );
};
interface LabbledInputs {
  lable: string;
  placeholder: string;
  type: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LableInput({ lable, placeholder, type, onchange }: LabbledInputs) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {lable}
      </label>
      <input
        onChange={onchange}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-3 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}
