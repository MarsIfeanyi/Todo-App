const AddTaskForm = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Task</label>
        <input type="text" name="task" id="task" />

        <input type="button" value="Add Task" />
      </form>
    </div>
  );
};

export default AddTaskForm;
