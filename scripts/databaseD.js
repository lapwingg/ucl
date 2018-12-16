$(document).ready(function(){                   
        for(var i = 0; i < localStorage.length; i++) {
                if (localStorage.getItem("postD_" + i) !== null){
                        $('div#comments').append("<p>" + localStorage.getItem("postD_" + i) + "</p>");
                }
        }      
});