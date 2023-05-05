import Login from "./Login";
import Registration from "./Registration";

const MainNav = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-between mx-32">
        <h1>TodoApp</h1>

        <div className="flex flex-row gap-8">
          <Registration />

          <Login />
        </div>
      </div>
    </>
  );
};

export default MainNav;
