"use client";

export default function Poema() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">📜 Un Poema Especial, para mi panchera especial (toca practicar el ingles amor nimodo)💖</h1>
      <img
        src="/poema.jpg"
        alt="Poema especial"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
      <a href="/" className="mt-6 text-blue-600 underline">⬅ Volver a la página principal</a>
    </div>
  );
}
