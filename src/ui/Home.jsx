import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="m-8 text-center">
      <h1 className=" text-stone-700 font-semibold mb-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
