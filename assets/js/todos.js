//strike through todos
$("ul").on("click", "li", function() {
	$(this).toggleClass("strikethrough");
});

//click on x to delete the todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(250, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//take input value and append to list
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear input field
		$(this).val("");

		//create new li and append to the ul
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
	}
})

//plus button shows input field
$('.fa-plus').on("click", function() {
	$("input[type='text']").slideToggle(200);
})