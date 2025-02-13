"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function EncuentraPinguino() {
  // Lista fija de los 6 pingüinos
  const pinguinosBase = [
    { src: "/pinguinos/pingui1.jpg", esEspecial: false },
    { src: "/pinguinos/pingui2.jpg", esEspecial: false },
    { src: "/pinguinos/pingui3.jpg", esEspecial: true }, // Este es el especial
    { src: "/pinguinos/pingui4.jpg", esEspecial: false },
    { src: "/pinguinos/pingui5.jpg", esEspecial: false },
    { src: "/pinguinos/pingui6.jpg", esEspecial: false }
  ];

  const [pinguinos, setPinguinos] = useState([]);

  useEffect(() => {
    // Mezclamos los pingüinos solo en el cliente para evitar errores de hidratación
    setPinguinos([...pinguinosBase].sort(() => Math.random() - 0.5));
  }, []);

  const [mensaje, setMensaje] = useState("");

  const verificarPinguino = (index) => {
    if (pinguinos[index].esEspecial) {
      setMensaje("¡Lo lograste! 🐧✨ Ese gorrito le queda mejor a nuestra Cielo obviamente ❤️");
    } else {
      setMensaje("Ese no era, intenta de nuevo... 😅");
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">🐧 Encuentra al Pingüino Especial 🐧</h1>
      <p className="text-lg text-gray-700 mb-6">Uno de ellos quiso copiar el estilo de la pinguinita más bonita del mundo, puedes encontrar cual de ellos es??? </p>

      {pinguinos.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
          {pinguinos.map((pinguino, index) => (
            <img
              key={index}
              src={pinguino.src}
              alt="Pingüino"
              className="w-24 h-24 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => verificarPinguino(index)}
            />
          ))}
        </div>
      )}

      {mensaje && (
        <div className="mt-6 p-4 bg-white text-gray-700 shadow-md rounded-lg text-center text-lg">
          {mensaje}

          <Link href="/rompecabezas" className="fixed right-12 bottom-0 cursor-pointer">
            <img src="/pinguino.png" alt="Pingüino" className="fixed right-0 bottom-0 w-12 hover:scale-110 transition duration-300" />
            <p className="text-center text-blue-500 text-sm font-semibold">Holis por ultima vez preciosa, < br/>haz click en mi <br /> y descubre que sucede!!!</p>
          </Link>

        </div>
      )}

      <a href="/" className="mt-6 text-blue-600 underline">⬅ Volver a la página principal</a>
    </div>
  );
}
