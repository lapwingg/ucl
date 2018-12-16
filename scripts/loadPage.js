$(document).ready(function() { 
    $('div#menuElem nav#menu ul li a').click(function() {      
      var podstrona = $(this).attr('href');
       $('#content').html('Ładuję...');
       $('#content').load('html/' + podstrona);
       return false;
    });
 });