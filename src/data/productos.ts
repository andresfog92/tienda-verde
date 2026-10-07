export type Categoria = "aceites" | "comestibles" | "topicos" | "canamo" | "accesorios";

export type Producto = {
  id: number;
  nombre: string;
  categoria: Categoria;
  precio: number;
  emoji: string;
  colores: [string, string];
  img: string;
  badge?: string;
  desc: string;
};

export type Carrito = Record<number, number>;

// Tu número con 57 al inicio, sin + ni espacios
export const WHATSAPP = "3172193342";

export const cop = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);

export const productos: Producto[] = [
  { id: 1, nombre: "Aceite CBD 10% · 30 ml", categoria: "aceites", precio: 129900, emoji: "🫒", colores: ["#14532d", "#3ddc84"], img: "/img/aceite10.jpg", badge: "Más vendido", desc: "Espectro completo, ideal para empezar." },
  { id: 2, nombre: "Aceite CBD 20% · 30 ml", categoria: "aceites", precio: 189900, emoji: "💧", colores: ["#064e3b", "#e8c872"], img: "/img/aceite20.jpg", badge: "Premium", desc: "Mayor concentración, aroma suave." },
  { id: 3, nombre: "Gomitas de CBD x20", categoria: "comestibles", precio: 79900, emoji: "🍬", colores: ["#7c2d12", "#fb923c"], img: "/img/gomitas.jpg", badge: "Nuevo", desc: "Sabor frutas, 10 mg por unidad." },
  { id: 4, nombre: "Chocolate oscuro con CBD", categoria: "comestibles", precio: 42900, emoji: "🍫", colores: ["#3b1d0f", "#a16207"], img: "/img/chocolate.jpg", desc: "70% cacao colombiano, 5 porciones." },
  { id: 5, nombre: "Crema tópica CBD · 60 g", categoria: "topicos", precio: 64900, emoji: "🧴", colores: ["#134e4a", "#5eead4"], img: "/img/crema.jpg", desc: "Con árnica y mentol para después del deporte." },
  { id: 6, nombre: "Bálsamo labial de cáñamo", categoria: "topicos", precio: 24900, emoji: "💄", colores: ["#831843", "#f9a8d4"], img: "/img/balsamo.jpg", desc: "Hidratación natural con cera de abejas." },
  { id: 7, nombre: "Flor de cáñamo CBD · 5 g", categoria: "canamo", precio: 49900, emoji: "🌿", colores: ["#14532d", "#86efac"], img: "/img/flor.jpg", badge: "Top", desc: "Cultivo indoor, THC dentro del límite legal." },
  { id: 8, nombre: "Infusión de cáñamo y manzanilla", categoria: "canamo", precio: 28900, emoji: "🍵", colores: ["#365314", "#bef264"], img: "/img/te.jpg", desc: "20 bolsitas, relajante natural." },
  { id: 9, nombre: "Grinder metálico 4 partes", categoria: "accesorios", precio: 34900, emoji: "⚙️", colores: ["#1e293b", "#94a3b8"], img: "/img/grinder.jpg", desc: "Aluminio, 50 mm, con recolector." },
  { id: 10, nombre: "Papel de liar orgánico", categoria: "accesorios", precio: 6900, emoji: "📜", colores: ["#44403c", "#d6d3d1"], img: "/img/papel.jpg", desc: "Fibra de cáñamo, libro de 50 hojas." },
  { id: 11, nombre: "Vaporizador portátil", categoria: "accesorios", precio: 159900, emoji: "💨", colores: ["#312e81", "#a5b4fc"], img: "/img/vape.jpg", badge: "Edición oro", desc: "Batería de 1.500 mAh, carga USB-C." },
  { id: 12, nombre: "Kit Bienestar Completo", categoria: "aceites", precio: 259900, emoji: "🎁", colores: ["#713f12", "#facc15"], img: "/img/kit.jpg", badge: "Ahorra 15%", desc: "Aceite 10% + crema + gomitas + infusión." },
];