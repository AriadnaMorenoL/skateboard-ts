import { useEffect, useReducer } from "react";
import Board from "./components/Board.tsx";
import Header from "./components/Header.tsx";
import { cartReducer, initialState } from "./reducers/cart-reducer.ts";

function App() {


  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);


  return (
    <>
      <Header
        cart={state.cart}
        dispatch={dispatch}
        
      />
      <main className="container-xl mt-5">
        <h2 className="text-center ">Our colection</h2>
        <div className="row mt-5">
          {state.data.map((board) => (
            <Board
              key={board.id}
              board={board}
              dispatch={dispatch}

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
