export type Recurso = {
  id: number;
  producto: string;
  categoria: string;
  thc: string;
  precio: number;
};

export type NuevoRecurso = Omit<Recurso, "id">;

const API_URL = import.meta.env.API_URL ?? "http://localhost:3001";

// GET: trae la lista de productos
export async function obtenerRecursos(): Promise<Recurso[]> {
  const respuesta = await fetch(`${API_URL}/api/marihuana`);
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al cargar los productos`);
  }
  return respuesta.json();
}

// POST: crea un producto nuevo
export async function crearRecurso(nuevo: NuevoRecurso): Promise<Recurso> {
  const respuesta = await fetch(`${API_URL}/api/marihuana`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevo),
  });
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al guardar el producto`);
  }
  return respuesta.json();
}