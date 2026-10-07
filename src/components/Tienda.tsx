import { useState } from "react";
import { productos, cop } from "../data/productos";
import type { Categoria, Producto } from "../data/productos";

type Filtro = "todos" | Categoria;

const filtros: { valor: Filtro; texto: string }[] = [
  { valor: "todos", texto: "Todos" },
  { valor: "aceites", texto: "Aceites" },
  { valor: "comestibles", texto: "Comestibles" },
  { valor: "topicos", texto: "Tópicos" },
  { valor: "canamo", texto: "Cáñamo" },
  { valor: "accesorios", texto: "Accesorios" },
];

type TarjetaProps = {
  producto: Producto;
  indice: number;
  onAgregar: (id: number) => void;
};

function TarjetaProducto({ producto, indice, onAgregar }: TarjetaProps) {
  const [fallo, setFallo] = useState(false);

  return (
    <article className="product" style={{ animationDelay: `${indice * 0.05}s` }}>
      <div
        className="media"
        style={{
          background: `linear-gradient(135deg, ${producto.colores[0]}, ${producto.colores[1]})`,
        }}
      >
        {producto.badge && <span className="badge">{producto.badge}</span>}
        <span>{producto.emoji}</span>
        {!fallo && (
          <img
            src={producto.img}
            alt={producto.nombre}
            loading="lazy"
            onError={() => setFallo(true)}
          />
        )}
      </div>
      <div className="info">
        <h3>{producto.nombre}</h3>
        <p>{producto.desc}</p>
        <div className="buy">
          <span className="price">{cop(producto.precio)}</span>
          <button className="add" onClick={() => onAgregar(producto.id)}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

type Props = {
  onAgregar: (id: number) => void;
};

function Tienda({ onAgregar }: Props) {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const lista =
    filtro === "todos" ? productos : productos.filter((p) => p.categoria === filtro);

  return (
    <section id="productos" className="section dark">
      <h2 className="title reveal">Nuestra tienda</h2>
      <p className="subtitle reveal">Precios en pesos colombianos (COP), IVA incluido.</p>

      <div className="filters reveal">
        {filtros.map((f) => (
          <button
            key={f.valor}
            className={filtro === f.valor ? "chip active" : "chip"}
            onClick={() => setFiltro(f.valor)}
          >
            {f.texto}
          </button>
        ))}
      </div>

      <div className="grid">
        {lista.map((p, i) => (
          <TarjetaProducto key={p.id} producto={p} indice={i} onAgregar={onAgregar} />
        ))}
      </div>
    </section>
  );
}

export default Tienda;