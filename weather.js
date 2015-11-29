$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    var markup = "The current temperature in Chicago is" + "  " + data.currently.apparentTemperature + "  " 
    + "and the overhead atmosphere is" + "  " + data.currently.summary + ". " + "Weather forecast for tomorrow is" + "  " 
    + data.daily.data[1].summary + "  " + "The day after tomorrow will have" + "  " + data.daily.data[2].summary
    + "  " + "and the day after that will have" + "  " + data.daily.data[2].summary;

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});