import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

export default function Home() {
  const { pizzas, setPizzas } = useContext(Context);
  //ƒ
  const setFavorito = (id) => {
    const pizzaIndex = pizzas.findIndex((f) => f.id === id);
    pizzas[pizzaIndex].favorito = !pizzas[pizzaIndex].favorito;
    setPizzas([...pizzas]);
  };

  return (
    //className="galeria grid-columns-4 p-3"  
      <div className="galeria grid-columns-4 p-3 justify-content-center">
        {pizzas.map((pizza, i) => (
          <div
            onClick={() => setFavorito(pizza.id)}
            className="foto"
            style={{ backgroundImage: `url(${pizza.img})` }}
            key={i}
          >
            <Heart filled={pizza.favorito} />
            <div>
              <p className="description">{pizza.id}</p> 
              <p className="nombre">{pizza.name}</p> 
              <p className="ingred">{pizza.ingredients}</p>
            </div>             
          </div>
        ))}
      </div>
  );
}

