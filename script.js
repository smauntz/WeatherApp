if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position){
var latitude = position.coords.latitude
var longitude = position.coords.longitude
var geolocation = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + "&language=en";

  $.getJSON(geolocation).done(function(location) {
        console.log(location);
        var location = location.results[0].address_components[1].long_name + ", " +                                                                                       location.results[0].address_components[3].long_name+ ", " +                                        
            location.results[0].address_components[5].long_name; // returns str name and city
        $("#location").html(location);
          //prints the location
      })
var data;
var url = "https://api.darksky.net/forecast/2d970a734f765a9b65e892c63cc0e66c/" + latitude + "," + longitude + "?callback=?&units=ca";
  
 $.getJSON(url, function(data) {

$("#weather").html("Weather: "+data.currently.summary);
$("#temp").html("Temperature: "+data.currently.temperature);


$("#icon").addClass(data.currently.icon);
   $('#fButton').click(function() {
var cel = data.currently.temperature;
$("#temp").html("Temperature: "+Math.round(cel*1.8+32));
});

$('#cButton').click(function() {
var cel = data.currently.temperature;
$("#temp").html("Temperature: "+cel);
});
   
   var skycons = new Skycons({"color": "yellow"});
   debugger;
      skycons.set("icon", data.currently.icon);
      skycons.play();
   
   console.log(data);
  
   });
   

var today = new Date();
var date ="Date: "+(today.getMonth()+1)+'-'+ today.getDate()+'-'+today.getFullYear()+"<br>";
var time = "Time: "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
$("#date").html(dateTime);
   });
  
} else {
  var e = new Error('Geolocation is not supported by this browser.'); 
}


   

