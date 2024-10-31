// Entrevistas.jsx
import React from 'react';

const Entrevistas = () => (
  <div className="py-20 flex flex-wrap justify-center items-center gap-4">
    <h1 class="text-6xl font-bold text-center col-span-3 text-cyan-700">Entrevistas con el experto</h1>
    <div class="flex flex-col items-center">
      <iframe
        src="https://drive.google.com/file/d/1IqbLwOPwFLPkLQ1QOj8mu1xjTMi_c4uZ/preview"
        allow="autoplay"
        class="rounded-lg"
      ></iframe>
      <h1>Primera Parte</h1>
    </div>

    <div class="flex flex-col items-center">
      <iframe src="https://drive.google.com/file/d/1IqbLwOPwFLPkLQ1QOj8mu1xjTMi_c4uZ/preview" allow="autoplay"></iframe>
      <h1>Segunda Parte</h1>
    </div>

    <div class="flex flex-col items-center">
      <iframe src="https://drive.google.com/file/d/1IqbLwOPwFLPkLQ1QOj8mu1xjTMi_c4uZ/preview" allow="autoplay"></iframe>
      <h1>Tercera Parte</h1>
    </div>
  </div>
);

export default Entrevistas;
