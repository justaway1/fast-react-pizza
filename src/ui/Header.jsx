import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase tracking-widest py-4 px-5 border-b-2 border-stone-200">
      <Link to="/">Fast React Pizza ltd.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
