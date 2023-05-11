import { Link } from "react-router-dom";

const EditTask = () => {
  return (
    <>
      <div>
        <Link to="/edit-task">
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white">
            Edit Task
          </button>
        </Link>
      </div>
    </>
  );
};

export default EditTask;
