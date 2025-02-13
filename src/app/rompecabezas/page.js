"use client";

import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Configuración del tamaño del rompecabezas
const piezasX = 4; // Número de columnas
const piezasY = 4; // Número de filas
const totalPiezas = piezasX * piezasY;

// Generar piezas únicas sin repetir y mezclar
const generarPiezasMezcladas = () => {
  let piezas = [];
  for (let y = 0; y < piezasY; y++) {
    for (let x = 0; x < piezasX; x++) {
      piezas.push({ id: y * piezasX + x, x, y });
    }
  }
  return piezas.sort(() => Math.random() - 0.5); // Mezclar aleatoriamente
};

// Componente de cada pieza del rompecabezas
function Pieza({ id, x, y, movePieza }) {
  const [{ isDragging }, drag] = useDrag({
    type: "pieza",
    item: { id, x, y },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "pieza",
    drop: (item) => movePieza(item.id, id),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="cursor-pointer border-2 border-white"
      style={{
        width: `75px`,
        height: `75px`,
        backgroundImage: "url('/rompecabezas.jpg')",
        backgroundSize: `${piezasX * 100}% ${piezasY * 100}%`,
        backgroundPosition: `${(x * 100) / (piezasX - 1)}% ${(y * 100) / (piezasY - 1)}%`,
        opacity: isDragging ? 0.5 : 1,
      }}
    ></div>
  );
}

// Componente principal del rompecabezas
export default function Rompecabezas() {
  const [piezas, setPiezas] = useState([]);
  const [completado, setCompletado] = useState(false);
  const [movimientos, setMovimientos] = useState(0); // Contador de movimientos

  // Generar el rompecabezas al cargar la página
  useEffect(() => {
    setPiezas(generarPiezasMezcladas());
  }, []);

  useEffect(() => {
    if (movimientos > 0) {
      // Verificar si todas las piezas están en orden correcto
      const estaCompleto = piezas.every((p, i) => p.id === i);
      if (estaCompleto) {
        setCompletado(true);
      }
    }
  }, [piezas, movimientos]);

  const moverPieza = (idDesde, idHasta) => {
    const indexDesde = piezas.findIndex((p) => p.id === idDesde);
    const indexHasta = piezas.findIndex((p) => p.id === idHasta);
    let nuevasPiezas = [...piezas];
    [nuevasPiezas[indexDesde], nuevasPiezas[indexHasta]] = [
      nuevasPiezas[indexHasta],
      nuevasPiezas[indexDesde],
    ];
    setPiezas(nuevasPiezas);
    setMovimientos(movimientos + 1); // Aumentar contador de movimientos
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">🧩 Rompecabezas Especial 🧩</h1>
        <p className="text-lg text-gray-700 mb-4">Ordena las piezas para revelar la imagen. Pista: Durante una videollamada, nos transformamos en animalitos (no furries pls) por un tiempo, recuerdas? 😍</p>

        {piezas.length > 0 && (
          <div
            className="grid gap-1 bg-white p-2 rounded-lg shadow-lg"
            style={{ gridTemplateColumns: `repeat(${piezasX}, 1fr)`, width: "300px" }}
          >
            {piezas.map((pieza) => (
              <Pieza key={pieza.id} {...pieza} movePieza={moverPieza} />
            ))}
          </div>
        )}

        {completado && (
          <div className="mt-6 p-4 bg-white shadow-md rounded-lg text-center text-lg text-green-700">
            ¡Felicidades mi vidaaaaa! Lo completasteeeee. Besote por preciosotaaaaaa 🎉💖
          </div>
        )}

        <a href="/" className="mt-6 text-blue-600 underline">⬅ Volver a la página principal</a>
      </div>
    </DndProvider>
  );
}
