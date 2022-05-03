$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 20, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 20, callback );
      }, 20 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 20 );
      }
    });