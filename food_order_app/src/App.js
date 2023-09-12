import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header title="ReactMeals" />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
