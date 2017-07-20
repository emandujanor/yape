var $telefono = $("#telefono");
var $botonContinuar = $("#botonContinuar");
var $telUsuario;
var $check = $('#filled-in-box');
var $codigoRespuesta;

$botonContinuar.click(function(){
  verificarCheck();
});
function obtenerCodigo(respuesta){
  //alert('estoy solicitando codigo');
  $.post('http://localhost:3000/api/resendCode', {
      phone: '$telUsuario',
    })
    .then(function(response){
      alert('Su código es: ' + response.data);
      var $codigoRespuesta= response.data;
      //$(location).attr('href','http://capitan-dev.laboratoria.la');
      console.log("el código dado es: " + $codigoRespuesta);
    })
}


function enviarData(){
  //alert("enviando data");
  $.post('http://localhost:3000/api/registerNumber', {
  		phone: '$telUsuario',
  		terms: 'true'
  	}) .then(obtenerCodigo())
}



//verifica que se acepten terminos y condi
function verificarCheck(){
  if($('#filled-in-box').is(':checked')) {
    enviarData();
           }else{
         alert("acepte los terminos y condiciones");
       }
}
//Habilita el boton continuary verifica que el telefono sea de 10digitos
$("#telefono").change(function(event){
  event.preventDefault();
  var $telefonoValor=$telefono.val();
  if ($telefonoValor.length ==10){
      $botonContinuar.removeClass('disabled');
      $telUsuario = $telefonoValor;

  }else{
      alert('Introduce los 10 digitos de tu teléfono ');
  }
});




//jquery carrusell

 $('.carousel.carousel-slider').carousel({fullWidth: true,
 indicators:true});

 function moverCarrusel() {
     $('.carousel').carousel('next');
   }


 $(document).ready(function(){
   $('.carousel').carousel();
   setInterval(moverCarrusel, 5000); //


 });
