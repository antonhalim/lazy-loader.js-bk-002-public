"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var num = 3;

function formatCars(carsJSON) {
    for(var i = 0, str = ''; i < carsJSON.length; i++){
        str += '<div class="col-md-4 car"><h2>' + carsJSON[i].Make + '</h2><p><strong>Model:</strong> ' + carsJSON[i].Model + '</p><p><strong>Year:</strong> ' + carsJSON[i].Year + '</p></div>';
    }
    str = '<div class="row">' + str + '</div>';
    return str;
}

function addCarsToDOM(carsJSON) {
    $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
    $.ajax({
      url: baseUrl+num+'/3',
      contentType: 'application/json',
      dataType: 'jsonp',
      success: function(data) {
          addCarsToDOM(data);
        num += 1;
      }
    });
}
