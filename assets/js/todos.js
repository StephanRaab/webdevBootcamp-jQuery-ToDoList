//strike through todos
$("li").on("click", function() {
	$(this).toggleClass("strikethrough");
});

//click on x to delete the todo
$("span").on("click", function(event) {
	$(this).parent().fadeOut(250, function() {
		$(this).remove();
	});
	event.stopPropagation();
});