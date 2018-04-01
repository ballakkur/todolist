//strike through on click
	$('ul').on("click","li",function(){
		$(this).toggleClass("strike");
	});
//deleting todo using span
	$('ul').on("click","span",function(event)
	{
		$(this).parent().fadeOut(function(){
			$(this).remove();
		})
		event.stopPropagation();
	});
//adding todos 
$("input[type='text'").keypress(function(event){
	if(event.which ===13)
	{
		let x = $(this).val();
		$(this).val("");
		$("ul").append(`<li><span><i class="far fa-trash-alt"></i></span> ${x}  </li>`);
		$(this).text("");
	}
});

