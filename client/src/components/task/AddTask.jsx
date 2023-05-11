import { Link } from "react-router-dom";

const AddTask = () => {
  return (
    <>
      <div>
        <Link to="/add-task">
          <button className="px-6 py-2 rounded-full bg-blue-700 text-white">
            Add Task
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddTask;
