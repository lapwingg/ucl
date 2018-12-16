var executed = false;
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "xmls/groupE.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('Elem').each(function(){
                if (!executed){
                        var name = $(this).find('Name').text(),
                        matches = $(this).find('Matches').text(),
                        points = $(this).find('Points').text(),
                        win = $(this).find('Win').text(),
                        draw = $(this).find('Draw').text(),
                        lost = $(this).find('Lost').text(),
                        goals = $(this).find('Goals').text(),
                        td = "<td>",
                        tdc = "</td>";
                        $('table#table').append("<tr>" + 
                            td + name + tdc + td + matches + tdc + td + points + tdc + td + win + tdc + td + draw + tdc 
                            + td + lost + tdc + td + goals + tdc + "</tr>")  
                        }
                    });
                    executed = true
                }
        });
    });