import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { obtenerRecursos, crearRecurso } from "../api/recursos";
import type { Recurso } from "../api/recursos";
import { cop } from "../data/productos";

const categorias = [
  "Flores",
  "Extractos",
  "Aceites",
  "Cápsulas",
  "Comestibles",
  "Infusiones",
  "Pre-rolls",
  "Tópicos",
  "Accesorios",
];

function Catalogo() {
  const [recursos, setRecursos] = useState<Recurso[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [producto, setProducto] = useState("");
  const [categoria, setCategoria] = useState("Flores");
  const [thc, setThc] = useState("");
  const [precio, setPrecio] = useState("");

  // GET al cargar la página
  useEffect(() => {
    obtenerRecursos()
      .then(setRecursos)
      .catch(() =>
        setError("No se pudo conectar con la API. ¿Está corriendo npm run api?")
      )
      .finally(() => setCargando(false));
  }, []);

  // POST al enviar el formulario
  const guardar = async (e: FormEvent) => {
    e.preventDefault();
    setMensaje("");
    try {
      const creado = await crearRecurso({
        producto: producto.trim(),
        categoria,
        thc: thc.trim(),
        precio: Number(precio),
      });
      setRecursos((actual) => [...actual, creado]);
      setProducto("");
      setCategoria("Flores");
      setThc("");
      setPrecio("");
      setMensaje("✅ Producto guardado con POST");
    } catch {
      setMensaje("❌ No se pudo guardar el producto");
    }
  };

  return (
    <section id="catalogo" className="section">
      <h2 className="title reveal">Catálogo desde la API</h2>
      <p className="subtitle reveal">
        Productos cargados con GET y nuevos productos guardados con POST.
      </p>

      <form className="api-form" onSubmit={guardar}>
        <input
          placeholder="Producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          placeholder="THC (ej. 18%)"
          value={thc}
          onChange={(e) => setThc(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          placeholder="Precio en COP"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          Guardar con POST
        </button>
      </form>

      {mensaje && <p className="api-msg">{mensaje}</p>}
      {cargando && <p className="api-msg">Cargando productos...</p>}
      {error && <p className="api-msg">{error}</p>}

      <div className="api-grid">
        {recursos.map((r) => (
          <article key={r.id} className="api-card">
            <small>{r.categoria}</small>
            <h3>{r.producto}</h3>
            <span className="thc">THC {r.thc}</span>
            <span className="price">{cop(r.precio)}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;