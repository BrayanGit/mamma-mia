import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Carrito from "./views/Carrito";


  export default function App() {
    const [pizzas, setPizzas] = useState([]);

    const endpoint = "/data.json";
    const getPizzas = async () => {
    const res = await fetch(endpoint);
    let { pizzas } = await res.json();
      pizzas = pizzas.map((pizzas) => ({
        id: pizzas.id,
        img: pizzas.img,
        desc: pizzas.desc,
        precio: pizzas.price,
        nombre: pizzas.name,
        ingred: pizzas.ingredients,
        favorito: false

      }));
      setPizzas(pizzas);
    };

    useEffect(() => {
      getPizzas();
    }, []);
    
    return (
      <div className="App">
        <Context.Provider value={{ pizzas, setPizzas }}>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </BrowserRouter>
        </Context.Provider>
      </div>
    );
  }
