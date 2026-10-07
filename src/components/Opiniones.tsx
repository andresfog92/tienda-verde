const opiniones = [
  { texto: "El aceite de 20% me ayudó muchísimo a descansar mejor. Llegó rápido y súper bien empacado.", autor: "Camila R. · Medellín" },
  { texto: "Las gomitas son deliciosas y la asesoría por WhatsApp fue muy amable.", autor: "Andrés M. · Bogotá" },
  { texto: "La crema tópica es mi favorita después de entrenar. Volveré a comprar.", autor: "Laura P. · Cali" },
];

function Opiniones() {
  return (
    <section id="opiniones" className="section">
      <h2 className="title reveal">Lo que dicen nuestros clientes</h2>
      <p className="subtitle reveal">Reemplaza estas reseñas por opiniones reales de tus clientes.</p>
      <div className="reviews">
        {opiniones.map((o) => (
          <blockquote key={o.autor} className="review reveal">
            <p>“{o.texto}”</p>
            ⭐⭐⭐⭐⭐ {o.autor}
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Opiniones;