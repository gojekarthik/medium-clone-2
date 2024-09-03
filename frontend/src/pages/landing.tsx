import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome</h1>
        <p className="text-gray-600 mb-6 text-center">
          Please choose an option to continue
        </p>
        <div className="flex flex-col space-y-4">
          <Link to="/signin">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Signin
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
