import { useAppDispatch, useAppSelector } from "./app/hooks";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
