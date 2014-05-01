
define(['basic'], function($){

    // Fade out loading screen
    // remove child on transition end
    $('#appLoading').on('transitionend', function(e){
      //console.log(document, document.body, e, e.target);
      document.body.removeChild( e.target );
    });

    // Set Class to hidden after 5sec
    var id = window.setTimeout(function(){
      $('#appLoading').addClass('hidden');
      window.clearTimeout(id);
    }, 3000);

});
