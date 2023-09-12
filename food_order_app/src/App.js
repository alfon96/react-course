import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Cart />
      <Header title="ReactMeals" />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
