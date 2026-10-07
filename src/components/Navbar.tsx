import { useEffect, useState } from "react";

type Props = {
  cantidad: number;
  onAbrir: () => void;
};

function Navbar({ cantidad, onAbrir }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", alHacerScroll);
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <a href="#inicio" className="logo">
        🌿 Verde<span>Andino</span>
      </a>
      <nav>
        <a href="#beneficios">Beneficios</a>
        <a href="#productos">Tienda</a>
        <a href="#opiniones">Opiniones</a>
        <a href="#faq">Preguntas</a>
      </nav>
      <button className="cart-btn" onClick={onAbrir} aria-label="Abrir carrito">
        🛒 <span key={cantidad}>{cantidad}</span>
      </button>
    </header>
  );
}

export default Navbar;