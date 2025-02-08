"use client";

import { useState } from "react";

export default function Home() {
  const mensajes = [
    "Hola mi panchera hermosa 💖, este es un sitio es solo para ti.",
    "Cada día que pasa, te amo más y más. 💕",
    "Tienes unos ojazos de ensueño y una sonrisa de te amo por toda la vida 😘",
    "Eres mi lugar seguro en este mundo 🌎",
    "Siempre me siento seguro si es a tu lado. 🥰",
    "A cuanto tus besos, que yo quiero todos 💋",
    "A que hora sales por el pan mailov? 🥖",
    "Es que como no amarte con esos ojazos que te cargas 👀",
    "Tú eres la historia más bonita que el destino escribió en mi vida ✍️",
    "Esto pudo haber sido lindo, pero lo has hecho perfecto ✨",
    "Por más momentos juntos 🍂",
    "Dicen que el amor es solo una palabra hasta que llega alguien a darle sentido... gracias por llegar 🌞",
    "Solo hay dos momentos en que quiero estar contigo: Ahora y para Siempre 🌚",
    "De ti me sedujo tu alma 🐧",
    "Con todo mi amor, para toda la vida 🌟",
    "De vez en cuando el amor nos regala cuentos de hadas y tu has sido mi hada desde el primer dia 🧚🏼‍♀️",
    "Eres perfecta para mí 🙆🏻",
    "Mis días son mejores contigo 🫶🏻",
    "Los momentos a tu lado son únicos 🫶🏻",
    "Si no te hubiera conocido, habría soñado estar contigo 😴",
    "Crear contigo el amor y hacer contigo la vida es lo que yo quiero 😚",
    "Robaste mi corazón pero te dejaré tenerlo 💓",
    "No sé si estamos hechos el uno para el otro, pero si hemos llegado hasta aquí es porque seguimos eligiéndonos cada día y eso es como estar hechos el uno para el otro ❤️‍🩹",
    "Te quería decir que me gustas, pero siendo honestos: me encantas 💛",
    "Mi gran ilusión es despertarme junto a ti, que soñemos juntos y poder susurrarte al oído un te adoro cada mañana 🧡",
    "Qué cosa más bonita es verte, mientras me ves, viéndote a ti 💜",
    "Y mira tú, andaba buscando una estrella y encontré una galaxia contigo 🪐",
    "Hay todo en ti que me resulta adictivo, quizás sea tu sonrisa encantadora, o tu mirada tan de ensueño, o tus labios tan deliciosos o todo junto mientras sea tuyo 🌹",
    "Nunca pude estar más de acuerdo con la vida como cuando te trajo a mí 💐",
    "Aquí estaba yo… Pensando que la magia no existía y ahora es todo lo que veo cuando te miro 🧙🏼‍♂️",
    "El sol, la luna, las estrellas... Todo pierde sentido ante el cielo de tus ojos ☀️",
    "Este botón es mágico, igual que nuestro amor. 💫"
  ];

  const [mensaje, setMensaje] = useState(mensajes[0]);

  const mostrarSorpresa = () => {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    setMensaje(mensajeAleatorio);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">🐧 Para Mely 🐧</h1>
      <p className="text-lg text-gray-800 bg-white p-4 rounded-lg shadow-lg">{mensaje}</p>
      <button
        onClick={mostrarSorpresa}
        className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition duration-300"
      >
        🎁 Presiona para un texto sorpresa
      </button>
    </div>
  );
}
