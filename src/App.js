import Header from "./components/Layout/Header";
import Tools from "./components/Tools/Tools";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Tools />
      </main>
    </>
  );
}

export default App;
