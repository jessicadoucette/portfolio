$("#flip-img").flip();
console.log("flipped image"); 

var flipImg = document.querySelector('body'); 

$("#flip-img").on("click", function(event) {

	if (flipImg.hasClass('front')) {
var aboutMeDiv = $("<div>" + 
"<h1 id='aboutMeTitle'> More about Jessica Doucette </h1>" +
"<h2 style='color: #ff1d25;'>Insert Something Here</h2>" +
"<p>Cupcake ipsum dolor sit amet. Caramels lemon drops brownie powder gingerbread. Gummies danish caramels tiramisu bonbon tiramisu pie. Brownie tiramisu cookie cheesecake candy macaroon. Tiramisu powder jelly cake bear claw macaroon candy. Toffee bonbon pudding cheesecake cotton candy pie croissant sweet chocolate bar.</p>" +
"<p>Gummies gummies cake cheesecake dessert donut bear claw. Bear claw tart muffin chocolate cake gummies tootsie roll sweet roll biscuit cotton candy. Halvah chocolate bar halvah. Liquorice pie tart sesame snaps ice cream. Chupa chups croissant biscuit pastry. Soufflé soufflé lemon drops icing jujubes. Brownie chocolate marzipan. Pudding cake chocolate candy croissant cheesecake gingerbread.</p>" +

"<p>Apple pie brownie candy fruitcake. Jelly dessert gingerbread marshmallow chocolate cake jujubes pie sweet roll candy canes. Marzipan bear claw sesame snaps jujubes halvah wafer lollipop tootsie roll. Apple pie sweet lemon drops carrot cake chocolate bar caramels pie. Croissant tart powder candy candy jelly-o biscuit cake caramels. Candy liquorice brownie pastry gummies. Bear claw candy donut marshmallow gummies cheesecake liquorice. Tiramisu cookie ice cream brownie apple pie soufflé biscuit wafer. Cake pie toffee biscuit cotton candy. Liquorice jelly-o lemon drops sweet roll lemon drops.</p>" +
"<h2>Email:</h2>" +
"<a href='mailto:jessicadoucette15@gmail.com'>" +  "<p>jessicadoucette15@gmail.com</p>" + 
"</a>" +
"<div class='button-group'>" + "<a href='https://www.linkedin.com/in/jessicadoucette/' role='button' class='btn btn-outline-danger' target='_blank'> Go to LinkedIn</a>" +
"<a href='https://github.com/jessicadoucette' role='button' class='btn btn-danger' target='_blank'> Go to GitHub</a>" +
"<a href='/Users/jdoucette/Desktop/uubc/homework/08-homework/index.html' role='button' class='btn btn-outline-secondary' target='_blank'> Go Back to Portfolio</a>"
+ "</div>"); 

$(".test").html(aboutMeDiv); 
console.log("append"); 
	}


	else {
		var aboutMeDiv = $("<div>" + 
		"<h1 id='aboutMeTitle'> More about Jessica Doucette </h1>" +
		"<h2 style='color: #ff1d25;'>Insert Something Here</h2>" + "</div>"); 
	}





}); 