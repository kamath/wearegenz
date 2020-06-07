new WOW().init();

words = ['independent', 'confident', 'self-reliant', 'progressive', 'inclusive', 'tolerant', 
	'entrepreneurs', 'activists', 'justice', 'pursuers', 'leaders', 'innovators', 'world changers', 'Generation Z']

var i = 0;
var changeText = setInterval(() => {
	console.log(i);
	if(i < words.length - 1) 
	{
		$("#textchanging").fadeOut("fast", () => {
			$("#textchanging").text(words[i]+".");
		});
		$( "#textchanging").fadeIn("slow");
		i++;
	}
	else {
		clearInterval(changeText)
	}
}, 1500)