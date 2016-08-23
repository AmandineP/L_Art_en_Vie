$('button').click(function(e) {
  e.preventDefault();
  $('main').addClass('flip');
});


(function myFunction() {
    var logoBurger = document.getElementById('logoBurger');

    logoBurger.onclick = function () {

        if (move.style.marginLeft === "500px") {
            move.style.marginLeft = "0";

        } else {
            move.style.marginLeft = "500px";
        }
    };
})();