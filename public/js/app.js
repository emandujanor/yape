var $telefono = $("#telefono");
var $botonContinuar = $("#botonContinuar");
var $telUsuario;
var $check = $('#filled-in-box');

$botonContinuar.click(function(){
  verificarCheck();
});

function verificarCheck(){
  if($('#filled-in-box').is(':checked')) {
    $.get("http://localhost:3000/index.html");
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
