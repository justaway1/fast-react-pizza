import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const getCurrentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = getCurrentQuantity > 0;
  function handleCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt="pizza"
        className={`h-32 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow py-2">
        <p className="font-semibold">{name}</p>
        <p className="capitalize italic">{ingredients.join(" , ")}</p>
        <div className="flex items-center justify-between mt-auto ">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-stone-500">Sold Out!</p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && (
            <Button onClick={handleCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.array.isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
