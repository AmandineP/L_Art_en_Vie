 $(document).ready(function() {
   $(".logoBurger").click(function() {
     $(".MenuBurger").toggleClass("open");
   })
 })

  $(document).ready(function() {
   $(".closeMenu").click(function() {
     $(".MenuBurger").removeClass("open");
   })
 })