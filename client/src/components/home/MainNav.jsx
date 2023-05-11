import Login from "./Login";
import Registration from "./Registration";

const MainNav = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-between mx-32">
        <h1
          className="text-2xl text-blue-600 font-bold
        "
        >
          App Academy
        </h1>

        <div className="flex flex-row gap-10">
          <Registration />

          <Login />
        </div>
      </div>
    </>
  );
};

export default MainNav;
