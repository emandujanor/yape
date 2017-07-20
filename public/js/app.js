var $telefono = $("#telefono");
var $botonContinuar = $("#botonContinuar");
var $check= $("#filled-in-box");

$("#telefono").change(function(){
  var $telefonoValor=$telefono.val();
    if ($telefonoValor.length ==10){
      alert('Acepte los terminos y condiciones ');
    }else{
        alert('Introduce los 10 digitos de tu teléfono ');
    }
    $botonContinuar.removeClass('disabled');
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
