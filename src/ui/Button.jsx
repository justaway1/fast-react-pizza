import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block bg-yellow-300 py-3 px-5 uppercase font-semibold rounded-full hover:bg-yellow-400 text-stone-700 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
