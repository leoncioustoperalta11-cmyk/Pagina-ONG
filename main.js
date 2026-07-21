const botonMenu = document.querySelector('.menu-boton');
const navegacion = document.querySelector('.navegacion');
botonMenu.addEventListener('click', () => {
  const abierto = navegacion.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
});
document.querySelectorAll('.navegacion a').forEach(enlace => enlace.addEventListener('click', () => {
  navegacion.classList.remove('abierto');
  botonMenu.setAttribute('aria-expanded', 'false');
}));
const botonParticipa = document.querySelector('.desplegable button');
const subMenu = document.querySelector('.sub-menu');
botonParticipa.addEventListener('click', () => {
  const abierto = subMenu.classList.toggle('abierto');
  botonParticipa.setAttribute('aria-expanded', abierto);
});
document.getElementById('formulario-contacto').addEventListener('submit', evento => {
  evento.preventDefault();
  evento.currentTarget.querySelector('.mensaje-formulario').textContent = '¡Gracias! Recibimos tu mensaje y pronto nos pondremos en contacto.';
  evento.currentTarget.reset();
});
