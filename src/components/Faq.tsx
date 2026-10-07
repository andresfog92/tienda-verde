const preguntas = [
  { p: "¿Los productos tienen THC?", r: "Nuestros productos de cáñamo y CBD contienen niveles de THC dentro de lo permitido. Revisa la ficha de cada lote." },
  { p: "¿Cómo hago un pedido?", r: "Agrega productos al carrito y pulsa “Pedir por WhatsApp”. Te confirmamos disponibilidad y forma de pago." },
  { p: "¿Cuánto tarda el envío?", r: "Entre 24 y 72 horas en ciudades principales y hasta 5 días en el resto del país." },
  { p: "¿Puedo devolver un producto?", r: "Si llega dañado o con error, lo cambiamos. Por salud, no se aceptan devoluciones de productos abiertos." },
];

function Faq() {
  return (
    <section id="faq" className="section dark">
      <h2 className="title reveal">Preguntas frecuentes</h2>
      <div className="faq">
        {preguntas.map((q) => (
          <details key={q.p} className="reveal">
            <summary>{q.p}</summary>
            <p>{q.r}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;