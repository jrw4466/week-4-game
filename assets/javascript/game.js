var wins = 1;
var loses = 1;

//var random2 = Math.floor(Math.random() * 12) + 1;
//console.log(random2);


$(document).ready(function() {
	var random1 = Math.floor(Math.random() * (120 - 19) + 19);
	
	$("#randomNumber").text(random1);


	$(".btn").on("click", function () {
		//var images = $(this).closest("#images");
		var amount = +$(this).val();
		$("#score2").text(amount);
	});
});

