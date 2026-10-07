import { productos, cop, WHATSAPP } from "../data/productos";
import type { Carrito as CarritoTipo } from "../data/productos";

type Props = {
  abierto: boolean;
  carrito: CarritoTipo;
  onCerrar: () => void;
  onCambiar: (id: number, delta: number) => void;
  onVaciar: () => void;
};

function Carrito({ abierto, carrito, onCerrar, onCambiar, onVaciar }: Props) {
  const items = productos.filter((p) => carrito[p.id] > 0);
  const total = items.reduce((suma, p) => suma + p.precio * carrito[p.id], 0);

  const lineas = items.map(
    (p) => `• ${carrito[p.id]} x ${p.nombre} - ${cop(p.precio * carrito[p.id])}`
  );
  const mensaje = `Hola, quiero hacer este pedido:\n${lineas.join("\n")}\n\nTotal: ${cop(total)}`;
  const enlace = items.length
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`
    : "#productos";

  return (
    <>
      <div className={abierto ? "overlay show" : "overlay"} onClick={onCerrar}></div>
      <aside className={abierto ? "cart open" : "cart"}>
        <div className="cart-head">
          <h3>Tu carrito</h3>
          <button onClick={onCerrar} aria-label="Cerrar">✕</button>
        </div>

        <div className="cart-items">
          {items.length === 0 && <p className="empty">Tu carrito está vacío 🌱</p>}
          {items.map((p) => (
            <div key={p.id} className="item">
              <span className="ico">{p.emoji}</span>
              <div className="det">
                <strong>{p.nombre}</strong>
                <small>{cop(p.precio * carrito[p.id])}</small>
              </div>
              <div className="qty">
                <button onClick={() => onCambiar(p.id, -1)}>−</button>
                <span>{carrito[p.id]}</span>
                <button onClick={() => onCambiar(p.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-foot">
          <div className="total">
            <span>Total</span>
            <strong>{cop(total)}</strong>
          </div>
          <a
            href={enlace}
            className="btn btn-primary full"
            target="_blank"
            rel="noreferrer"
          >
            Pedir por WhatsApp
          </a>
          <button className="btn btn-ghost full" onClick={onVaciar}>
            Vaciar carrito
          </button>
        </div>
      </aside>
    </>
  );
}

export default Carrito;