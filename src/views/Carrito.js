import { useContext, useState } from "react";
import Context from "../Context";
import "../assets/css/carrito.css";

export default function Carrito() {
  const { pizzas } = useContext(Context);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (pizza) => {
    if (pizza.favorito) {
      const index = carrito.findIndex((item) => item.id === pizza.id);
      if (index >= 0) {
        const newCarrito = [...carrito];
        newCarrito[index].cantidad++;
        setCarrito(newCarrito);
      } else {
        const newCarrito = [
          ...carrito,
          {
            id: pizza.id,
            nombre: pizza.name,
            precio: pizza.precio,
            cantidad: 1,
          },
        ];
        setCarrito(newCarrito);
      }
    }
  };

  const quitarDelCarrito = (pizza) => {
    const index = carrito.findIndex((item) => item.id === pizza.id);
    if (index >= 0) {
      const newCarrito = [...carrito];
      if (newCarrito[index].cantidad === 1) {
        newCarrito.splice(index, 1);
      } else {
        newCarrito[index].cantidad--;
      }
      setCarrito(newCarrito);
    }
  };

  const totalCarrito = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  const pizzasFavoritas = pizzas.filter((pizza) => pizza.favorito);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div className="p-3 galeria grid-columns-4">
        {pizzasFavoritas.map((pizza, i) => (
          <div 
          className="fotocarro"
          style={{ backgroundImage: `url(${pizza.img})` }}
          key={i}
          >
            <button onClick={() => agregarAlCarrito(pizza)}>Agregar</button>
            <p className="frito">{pizza.id}</p>
            <p className="frito">{pizza.ingredients}</p>
            <p className="frito">{pizza.price}</p>
          </div>
        ))}
      </div>
      <div className="p-3 galeria grid-columns-4">
        {carrito.map((item, i) => (
          <div>
            <button onClick={() => quitarDelCarrito(item)}>Quitar</button>
            <p className="frito">{item.id}</p>
            <p className="frito">{item.precio}</p>
            <p className="frito">{item.cantidad}</p>
          </div>
        ))}
      </div>
      <div>Total: {totalCarrito}</div>
    </div>
  );
}

