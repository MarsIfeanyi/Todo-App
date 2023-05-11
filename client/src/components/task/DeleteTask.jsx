import { Link } from "react-router-dom";

const DeleteTask = () => {
  return (
    <>
      <div>
        <Link to="/delete-task">
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white">
            Delete Task
          </button>
        </Link>
      </div>
    </>
  );
};

export default DeleteTask;
