import Board from "./components/Board.tsx";
import Header from "./components/Header.tsx";
import { useCart } from "./hooks/useCart";

function App() {

  const {data,
    cart,
    addToCart,
    removeFromCart,
    increaseItem,
    decreaseItem,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();
  return (
    <>
      <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseItem={increaseItem}
      decreaseItem={decreaseItem}
      clearCart={clearCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Our colection</h2>
        <div className="row mt-5">
          {data.map((board) =>(
            <Board
              key={board.id}
              board ={board}
              addToCart ={addToCart}
              
            />

          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            SkateBoards  - All rights reservs
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
