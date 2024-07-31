$(document).ready(function(){
	$(".example").hide();
	$(".show").click(function(){
		$(".example").show(500)
		$(".show").hide()


	});
	$(".hide").click(function(){
		$(".example").hide(500)
		$(".show").show()
	});
});