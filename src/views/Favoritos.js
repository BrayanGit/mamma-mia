import { useContext } from "react";
import Context from "../Context";
import Heart from "../components/Heart";
import "../assets/css/favoritos.css";

export default function Favoritos() {
  const { pizzas } = useContext(Context);
  const pizzasFavoritas = pizzas.filter((pizza) => pizza.favorito);
  const numPizzasFavoritas = pizzasFavoritas.length;

  return (
    <div className="unico">
      <h1>Pizzas Favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {numPizzasFavoritas === 0 ? (
          <p className="info">No tienes fotos agregadas como favoritas</p>
        ) : (
          pizzasFavoritas.map((pizza, i) => (
            pizza.favorito && (
              <div
                className="fotopizza"
                style={{ backgroundImage: `url(${pizza.img})` }}
                key={i}
              >
                <Heart filled={true} />
                <p className="frito">{pizza.desc}</p>
                <p className="frito">{pizza.ingredients}</p>
                <p className="frito">{pizza.precio}</p>
              </div>
            )
          ))
        )}
      </div>
    </div>
  );
}


