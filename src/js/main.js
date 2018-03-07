$(window).ready(function(){
  var location = [];
  var conditions = [];
      
  $locations = $('#locations');
  $city = $('#city');
  $temp = $('#temp');
  $image = $('#image');

   $('.add').click(function() {

        var city = document.getElementById('name').value;
        var url='http://api.apixu.com/v1/current.json?key=2bbc04d4de3745b78de154857182102&q=' + city;
  
   
   getWeaterData(url);

   });  
   
   $('.cross').click(function() {
      console.log('stäng');
      //$('.weather').remove();
   });

}); 
 
 
function getWeaterData(url) {

   $.ajax({
       type: 'GET',
       url: url,
       success: function(locations) {

         getWeaterReport(locations);
           console.log('success', locations);
       }
       
   });
}
    

function getWeaterReport(locations) {
    var city;
    var temp;
    var weather;

 
    $.each(locations, function(i, location) {
            
        city = location.name;
        $city.append( location.name );
     
    });    

    $.each(locations, function(i, location) {
 
      temp = location.temp_c;
      $temp.append( location.temp_c );
    });    


    $.each(locations, function(i, current) {
    $.each(current, function(i, condition) {

        var weather = condition.text;
            
        if(weather == "Clear") {
            $image.append('<i class="icon" data-icon="B"></i>');
        }  
        else if(weather == "Partly cloudy") {
            $image.append('<i class="icon" data-icon="H"></i>');
        }
        else if(weather == "Rain") {
            $image.append('<i class="icon" data-icon="R"></i>');
        }
        else if(weather == "Snow") {
            $image.append('<i class="icon" data-icon="W"></i>');
        }
        else if(weather == "Light snow") {
            $image.append('<i class="icon" data-icon="U"></i>');
        }
        else if(weather == "Sunny") {
            $image.append('<i class="icon" data-icon="B"></i>');
        }
        else if(weather == "Partly rain") {
            $image.append('<i class="icon" data-icon="Q"></i>');
        }
        else if(weather == "Patchy rain possible") {
            $image.append('<i class="icon" data-icon="Q"></i>');
        }
        else if(weather == "Mist") {
            $image.append('<i class="icon" data-icon="M"></i>');
        }
        else if(weather == "Overcast") {
            $image.append('<i class="icon" data-icon="N"></i>');
        }  
        else if(weather == "Thunder") {
            $image.append('<i class="icon" data-icon="O"></i>');
        } 
        else if(weather == "Hail") {
            $image.append('<i class="icon" data-icon="X"></i>');
        } 
        else if(weather == "Light freezing rain") {
            $image.append('<i class="icon" data-icon="7"></i>');
        } 
        else if(weather == "Light rain") {
            $image.append('<i class="icon" data-icon="Q"></i>');
        }
    });
    });   

    printing(location, city, temp, weather);  
}


function printing(location, city, temp, weather ) {

   var back = ["#eb9861","#86dbef","#e4b262"];
   var rand = back[Math.floor(Math.random() * back.length)];

   $('.weather').css('background',rand);
   $('.close').css('display', 'flex');
   $('.degrees').css('display', 'inline');
   $('.cross').css({'color':rand, 'display':'inline' });
  
   $temp.append( location.temp_c );
   $city.append( location.name );

}