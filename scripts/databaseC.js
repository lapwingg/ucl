$(document).ready(function(){                   
        for(var i = 0; i < localStorage.length; i++) {
                if (localStorage.getItem("postC_" + i) !== null){
                        $('div#comments').append("<p>" + localStorage.getItem("postC_" + i) + "</p>");
                }
        }      
});