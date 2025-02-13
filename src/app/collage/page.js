"use client";

import Link from "next/link";

export default function Collage() {
  const imagenes = [
    { src: "/collage/foto1.jpg", texto: "Los enamorados en un columpio <3" },
    { src: "/collage/foto2.jpg", texto: "Viendo perritos y escuchando canciones juntitos" },
    { src: "/collage/foto3.jpg", texto: "Unidos por nuestros corazones ✨" },
    { src: "/collage/foto4.jpg", texto: "Una cena con la mejor compañia 💕" },
    { src: "/collage/foto5.jpg", texto: "Recuerdas cuando lo vimos mientras caminabamos?? 🌅" },
    { src: "/collage/foto6.jpg", texto: "Agarrar tu manita es mi vicio" },
    { src: "/collage/foto7.jpg", texto: "Manualidades con mucho amor :3" },
    { src: "/collage/foto8.jpg", texto: "¿Quienes son esos tortolitos?" },
    { src: "/collage/foto9.jpg", texto: "Visitando las iglesias de pueblitos" },
    { src: "/collage/foto10.jpg", texto: "¿De quien es esa mano que juega con el pinguinito?" },
    { src: "/collage/foto11.jpg", texto: "Nuestra bendi, nuestra Cielo" },
    { src: "/collage/foto12.jpg", texto: "En la playa los mas enamorados" },
    { src: "/collage/foto13.jpg", texto: "Y aqui se presentan, Rosa, Blanca y Rosita" },
    { src: "/collage/foto14.jpg", texto: "Nuestros primeros anillos de pareja" },
    { src: "/collage/foto15.jpg", texto: "Hasta nuestras sombras estan enamoradas" },
    { src: "/collage/foto16.jpg", texto: "Un corazon en la playa del amor" },
    { src: "/collage/foto17.jpg", texto: "Una sorpresa de Ruffles" },
    { src: "/collage/foto18.jpg", texto: "Un anillo, una promesa" }
  ];

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">📸 Collage de Recuerdos 💖</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {imagenes.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={`Recuerdo ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-700 mt-2">{img.texto}</p>
          </div>
        ))}
      </div>
      {/* Pingüino clickeable */}
      <Link href="/pinguino" className="fixed right-12 bottom-0 cursor-pointer">
            <img src="/pinguino.png" alt="Pingüino" className="fixed right-0 bottom-0 w-12 hover:scale-110 transition duration-300" />
            <p className="text-center text-blue-500 text-sm font-semibold">Holis de nuevo, < br/>haz click en mi <br /> para un acertijo!!!</p>
          </Link>

      <a href="/" className="mt-6 text-blue-600 underline">⬅ Volver a la página principal</a>
    </div>
  );
}
