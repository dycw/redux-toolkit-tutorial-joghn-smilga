import { useAppDispatch } from "../app/hooks";
import { ChevronUp, ChevronDown } from "../icons";
import { removeItem, increase, decrease } from "../slices/cart";

type Props = {
  id: string;
  img: string;
  title: string;
  price: number;
  amount: number;
};

export default function CartItem(props: Props) {
  const dispatch = useAppDispatch();
  return (
    <article className="cart-item">
      <img src={props.img} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
        <h4 className="item-price">${props.price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(props.id));
          }}
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
        <p className="amount">{props.amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            props.amount === 1 && dispatch(removeItem(props.id));
            props.amount >= 2 && dispatch(decrease(props.id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
