import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div>
        <Link to="/sign-up">
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </>
  );
};

export default Registration;
