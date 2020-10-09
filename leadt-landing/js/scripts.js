const url = 'https://api.npoint.io/428466d6262b85c32f71'; //datos .json en url externa

$.ajax({
  	url: url,
  	data: "JSON",
  	method: 'GET'
}).then(function(data) {
  	let allData = data.dataImages[0];
  	$("#bgImage").html($("<img>").attr("src", allData.bgImage));
  	$("#iconTrip").html($("<img>").attr("src", allData.iconTrip));
  	$("#logo").html($("<img>").attr("src", allData.logo));
  	//$("#slider").html($("<img>").attr("src", allData.imageRocket));
    $('#title').text(allData.title);
  	$('#subtitle').text(allData.subtitle);
  	$('#hash').text(allData.hash);
  	$('#linkprev').text(allData.linkprev);
  	$('#linknext').text(allData.linknext);
  	$('#easeView').text(allData.easeView);

    //Slider buttons
    $("#linknext").css("color", "#56bd9c");

    $("#linknext").click(function() {
      $("#my_image").attr("src","second.jpg");
      $("#slider").html($("<img>").attr("src", './assets/images/background_moon.png'));
      $("#linknext").css("color", "white");
      $("#linkprev").css("color", "#56bd9c");
      $('#title').text('Explore the surface'); //no se encuentra en .json
      //load bar
      $("#barLoadWhite").css("border", "1px solid #56bd9c");
      $("#barLoadBlue").css("border", "1px solid white");

    });
    $("#linkprev").click(function() {
      $("#slider").empty()
      $("#linkprev").css("color", "white");
      $("#linknext").css("color", "#56bd9c");
      $('#title').text(allData.title);
      //load bar
      $("#barLoadWhite").css("border", "1px solid white");
      $("#barLoadBlue").css("border", "1px solid #56bd9c");
    });

});
