import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-700 text-stone-200 uppercase p-4">
      <p className="space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
