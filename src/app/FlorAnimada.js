"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FlorAnimada() {
    const [mostrarFlor, setMostrarFlor] = useState(false);
  
    const codigoFlor = `
      {mostrarFlor && (
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }} >
              {/* Tallo */}
              <x1="75" y1="180" x2="75" y2="100" strokeLinecap="round"/>
              {/* Hojas */}
              <ellipse cx="55" cy="140" rx="20" ry="10" fill="green" />
              <ellipse cx="95" cy="140" rx="20" ry="10" fill="green" />
              {/* Pétalos */}
              <circle cx="75" cy="80" r="25" fill="pink" />
              <circle cx="55" cy="90" r="20" fill="pink" />
              {/* Centro de la flor */}
              <circle cx="75" cy="80" r="10" fill="yellow" />
            </svg>
          </motion.div> )}
    `;
  
    return (
      <div className="flex flex-col items-center justify-center min-h-auto text-white p-6">
        <h1 className="text-3xl font-bold text-pink-400 mb-3">🌸 Un regalo para una preciosa 🌸</h1>
        
        {/* Simulación de terminal */}
        {!mostrarFlor && (
          <motion.div
            className="bg-white p-8 rounded-xl text-blue-500 font-mono shadow-lg"
            initial={{ opacity: 1 }}
            animate={{ opacity: mostrarFlor ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <pre>{codigoFlor}</pre>
          </motion.div>  
        )}
        
        {/* Botón para compilar */}
        {!mostrarFlor && (
          <button
            onClick={() => setMostrarFlor(true)}
            className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
          >
            ▶️ Compilar Flor
          </button>
        )}
        
        {/* Animación de la flor */}
        {mostrarFlor && (
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <svg width="150" height="200" viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
              {/* Tallo */}
              <line x1="75" y1="180" x2="75" y2="100" stroke="green" strokeWidth="6" strokeLinecap="round" />
              {/* Hojas */}
              <ellipse cx="55" cy="140" rx="20" ry="10" fill="green" />
              <ellipse cx="95" cy="140" rx="20" ry="10" fill="green" />
              {/* Pétalos */}
              <circle cx="75" cy="80" r="25" fill="pink" />
              <circle cx="55" cy="90" r="20" fill="pink" />
              <circle cx="95" cy="90" r="20" fill="pink" />
              <circle cx="65" cy="60" r="20" fill="pink" />
              <circle cx="85" cy="60" r="20" fill="pink" />
              {/* Centro de la flor */}
              <circle cx="75" cy="80" r="10" fill="yellow" />
            </svg>
          </motion.div>
        )}
      </div>
    );
  }