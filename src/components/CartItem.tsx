import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ChevronUp, ChevronDown } from "../icons";
import { removeItem, increase, decrease, selectQuantity } from "../slices/cart";

type Props = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export default function CartItem(props: Props) {
  const dispatch = useAppDispatch();
  const amount = useAppSelector((s) => selectQuantity(s.cart, props.id));

  return (
    <article className="cart-item">
      <img src={props.img} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
        <h4 className="item-price">${props.price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(props.id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase(props.id));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch(decrease(props.id))}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
