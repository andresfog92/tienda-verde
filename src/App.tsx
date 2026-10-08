import { useEffect, useState } from "react";
import useReveal from "./hooks/useReveal";
import type { Carrito as CarritoTipo } from "./data/productos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import Tienda from "./components/Tienda";
import Opiniones from "./components/Opiniones";
import Faq from "./components/Faq";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";

function App() {
  const [mayorEdad, setMayorEdad] = useState(
    () => localStorage.getItem("mayorEdad") === "si"
  );
  const [carrito, setCarrito] = useState<CarritoTipo>(() =>
    JSON.parse(localStorage.getItem("carrito") ?? "{}")
  );
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  useReveal();

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const confirmarEdad = () => {
    localStorage.setItem("mayorEdad", "si");
    setMayorEdad(true);
  };

  const agregar = (id: number) => {
    setCarrito((actual) => ({ ...actual, [id]: (actual[id] ?? 0) + 1 }));
  };

  const cambiar = (id: number, delta: number) => {
    setCarrito((actual) => {
      const nueva = (actual[id] ?? 0) + delta;
      const copia = { ...actual };
      if (nueva <= 0) delete copia[id];
      else copia[id] = nueva;
      return copia;
    });
  };

  const cantidad = Object.values(carrito).reduce((suma, q) => suma + q, 0);

  return (
    <>
      {!mayorEdad && (
        <div className="age-gate">
          <div className="age-card">
            <span className="age-leaf">🌿</span>
            <h2>¿Eres mayor de 18 años?</h2>
            <p>Este sitio presenta productos de cannabis y cáñamo dirigidos solo a adultos.</p>
            <div className="age-actions">
              <button className="btn btn-primary" onClick={confirmarEdad}>
                Sí, soy mayor de edad
              </button>
              <a href="https://www.google.com" className="btn btn-ghost">
                No, salir
              </a>
            </div>
          </div>
        </div>
      )}

      <Navbar cantidad={cantidad} onAbrir={() => setCarritoAbierto(true)} />
      <Hero />
      <Beneficios />
      <Tienda onAgregar={agregar} />
      <Opiniones />
      <Faq />
      <Catalogo />
      <Footer />
      <Carrito
        abierto={carritoAbierto}
        carrito={carrito}
        onCerrar={() => setCarritoAbierto(false)}
        onCambiar={cambiar}
        onVaciar={() => setCarrito({})}
      />
    </>
  );
}

export default App;