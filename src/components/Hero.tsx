function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <span className="leaf l1">🌿</span>
      <span className="leaf l2">🍃</span>
      <span className="leaf l3">🌱</span>
      <div className="hero-content">
        <p className="eyebrow">Bienestar natural · Hecho en Colombia</p>
        <h1>
          La naturaleza, <em>bien cultivada.</em>
        </h1>
        <p className="hero-text">
          Aceites, comestibles, tópicos y accesorios de CBD y cáñamo. Calidad
          premium, con envíos a todo el país.
        </p>
        <div className="hero-actions">
          <a href="#productos" className="btn btn-primary">Ver la tienda</a>
          <a href="#beneficios" className="btn btn-ghost">Conocer más</a>
        </div>
        <div className="stats">
          <div><strong>+5.000</strong><span>clientes felices</span></div>
          <div><strong>100%</strong><span>lotes analizados</span></div>
          <div><strong>24-72 h</strong><span>envío nacional</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;