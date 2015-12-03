$(document).ready(function(){
   $("a.mobile").click(function(){
       $(".sidebar").slideToggle('fast');
   });

  window.onresize = funtion(event) {
     if($(window).width() > 320){
     	$(".sidebar").show();

     }
  };



});