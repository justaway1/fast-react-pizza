import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((store) => store.user.username);

  if (!username) return null;

  return (
    <div>
      <p className="text-sm font-semibold hidden fot-semibold md:block">
        {username}
      </p>
    </div>
  );
}

export default Username;
