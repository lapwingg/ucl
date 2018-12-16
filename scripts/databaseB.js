$(document).ready(function(){                   
        for(var i = 0; i < localStorage.length; i++) {
                if (localStorage.getItem("postB_" + i) !== null){
                        $('div#comments').append("<p>" + localStorage.getItem("postB_" + i) + "</p>");
                }
        }      
});