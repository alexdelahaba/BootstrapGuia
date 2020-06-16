$('.galeria .contenedor-imagen').click((evt) => {
  $('#modal').modal;
  var srcImagen = evt.target.getAttribute('src');
  $('#imagen-modal').attr('src', srcImagen);
});

$('#modal').on('click', () => {
  $('#modal').modal('hide');
});
