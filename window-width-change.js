  //LISTEN FOR WINDOW WIDTH AND CALL METHOD
  $(window).on("resize",/*{checkout_not_active},*/window_event_function);
  
  //function to call
  function window_event_function(e) {
    var winWidth = $(window).width();
    if($(window).width()> (1000){
      alert('window greater than 1000px');
    }
