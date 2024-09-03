import { SignupInput } from "@medium-common-module/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  const buttonHandler = async () => {
    try {
      console.log(postInputs);
      const response = await axios.post<{ token: string }>(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      localStorage.setItem("token", response.data.token);
      navigate("/blog");
    } catch (error) {
      console.error("Error during authentication", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="text-4xl font-extrabold text-left">
        {type === "signup" ? "Create An Account" : "Sign in To Your Account"}
      </div>
      <div className="text-slate-400 p-3">
        {type === "signup" ? (
          <div>
            Already have an account?{" "}
            <Link className="underline" to={"/signin"}>
              Login
            </Link>
          </div>
        ) : (
          <div>
            Don't have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Signup
            </Link>
          </div>
        )}
      </div>
      {type === "signup" && (
        <LabelInput
          label="Username"
          placeholder="john"
          type="text"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              name: e.target.value,
            });
          }}
        />
      )}
      <LabelInput
        label="Email"
        placeholder="johndoe@email.com"
        type="text"
        onChange={(e) => {
          setPostInputs({
            ...postInputs,
            email: e.target.value,
          });
        }}
      />
      <LabelInput
        label="Password"
        placeholder=""
        type="password"
        onChange={(e) => {
          setPostInputs({
            ...postInputs,
            password: e.target.value,
          });
        }}
      />
      <button
        onClick={buttonHandler}
        className="bg-black text-white p-1 rounded-md"
      >
        {type === "signup" ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
};

interface LabelInputProps {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({ label, placeholder, type, onChange }: LabelInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-3"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
