
$(document).ready(function(){
	var stepsDone = 0;
    $('img').mouseover(function(){
        $(this).css({height: '+=10%', width: '+=10%'});
    })
    $('img').mouseout(function(){
        $(this).css({height: '-=10%', width: '-=10%'});
    })
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
        
		$('ul.tabs li').removeClass('view');
		$('.tab-info').removeClass('view');

		$(this).addClass('view');
		$("#"+tab_id).addClass('view');
	})
    
    $('button').click(function(){
        var buttonClass = $(this).attr("class");
        var divText = $(this).closest('div');
        divText.html("Done With This Step!");
        stepsDone++;
        if(stepsDone==8){
            $(".popup").html("<h1>You finished the recipe! Enjoy!</h1>");
            $(".main").hide();
        }
    })
    
    
})
