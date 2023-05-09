import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <Link to="/sign-in">
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white">
            Sign In
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
