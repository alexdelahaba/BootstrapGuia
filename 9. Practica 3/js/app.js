var boton = $('#btn-menu');
var fondo_enlace = $('#fondo-enlace');

boton.click((evt) => {
  evt.preventDefault();
  fondo_enlace.toggleClass('active');
  $('#barra-lateral-izquierda').toggleClass('active');
});

fondo_enlace.click((evt) => {
  evt.preventDefault();
  fondo_enlace.toggleClass('active');
  $('#barra-lateral-izquierda').toggleClass('active');
});
