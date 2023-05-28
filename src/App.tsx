import { useAppDispatch, useAppSelector } from "./app/hooks";
import { reset, addMany, addOne } from "./slices/counter";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  return (
    <>
      <h1>Hello</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addOne())}>Add 1</button>
      <button onClick={() => dispatch(addMany(2))}>Add 2</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
