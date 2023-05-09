const SignInForm = () => {
  return (
    <div className="flex flex-col">
      <h1 className=" text-3xl text-center ">Sign In</h1>

      <form action="" className="mt-8">
        <div className="flex justify-start flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your Email"
          />
        </div>

        <div className="flex flex-col space-y-2  mt-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="Password"
            required
            placeholder="Your Password"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
