const beneficios = [
  { icono: "🧪", titulo: "Análisis de laboratorio", texto: "Resultados por lote para que sepas exactamente qué consumes." },
  { icono: "🚚", titulo: "Envíos a toda Colombia", texto: "Entrega discreta en Bogotá, Medellín, Cali y más ciudades." },
  { icono: "💬", titulo: "Asesoría personalizada", texto: "Te guiamos por WhatsApp para elegir el producto ideal." },
  { icono: "🌱", titulo: "Cultivo responsable", texto: "Prácticas sostenibles y materia prima de origen trazable." },
];

function Beneficios() {
  return (
    <section id="beneficios" className="section">
      <h2 className="title reveal">Por qué elegirnos</h2>
      <p className="subtitle reveal">Cuidamos cada detalle, del cultivo a tu puerta.</p>
      <div className="benefits">
        {beneficios.map((b) => (
          <article key={b.titulo} className="benefit reveal">
            <span>{b.icono}</span>
            <h3>{b.titulo}</h3>
            <p>{b.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Beneficios;