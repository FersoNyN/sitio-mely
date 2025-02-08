"use client";

import { useState } from "react";

export default function Home() {
  const mensajes = [
    "Hola mi panchera hermosa 💖, este sitio es solo para ti.",
    "Cada día que pasa, te amo más y más. 💕",
    "Eres mi persona favorita en todo el universo. 🌎✨",
    "Si pudiera elegir un lugar para estar ahora mismo, sería a tu lado. 🥰",
    "Este botón es mágico, igual que nuestro amor. 💫"
  ];

  const [mensaje, setMensaje] = useState(mensajes[0]);

  const mostrarSorpresa = () => {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    setMensaje(mensajeAleatorio);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">🌸 Para Mely 🌸</h1>
      <p className="text-lg text-gray-800 bg-white p-4 rounded-lg shadow-lg">{mensaje}</p>
      <button
        onClick={mostrarSorpresa}
        className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300"
      >
        🎁 Presiona para una sorpresa
      </button>
    </div>
  );
}
