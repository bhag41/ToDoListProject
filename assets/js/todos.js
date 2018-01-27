//check off specific todos by clicking it

$("ul").on("click","li",function(){
	/*//if li is gray 
	if($(this).css("color")=== "rgb(128, 128, 128)"){
		$(this).css({
			color : "black",
			textDecoration : "none",
		});
	}
	//turn it black
	else{
		//else make it gray
	$(this).css({
		color : "gray",
		textDecoration : "line-through",
	});
	}*/
	$(this).toggleClass("completed");
	});

// click on X to delete the todo

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	//console.log("key pressed!");
	if (event.which === 13)
	{
		//grabbing new todo text from input
		var toDoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
		$(this).val("");

	}
});
$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})