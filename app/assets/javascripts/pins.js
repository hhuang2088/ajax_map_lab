function initialize() {
  //
  var myLatlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    center: myLatlng,
    zoom: 2
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var marker = new google.maps.Marker({
      map: map,
      position: myLatlng,
      title: 'Hello World!'
    });

  function placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  $.ajax({
    url: "/pins",
    method: "get",
    dataType: "json",
    success: function(data) {
      for(i=0; i<data.length; i++){
        var loadLatLng = new google.maps.LatLng(data[i].latitude, data[i].longitude);
        new google.maps.Marker({
          position: loadLatLng,
          map: map
        })
      }
    },
    error: function() {
      console.log("not so great")
    }
  });

  google.maps.event.addListener(map, 'click', function(event) {
    $.ajax({
      url: "/pins",
      method: "post",
      data: {
        "pin": {
          "latitude": event.latLng.k,
          "longitude": event.latLng.A
        }
      },
      dataType: "json",
      success: function(){
        placeMarker(event.latLng);
      },
      error: function() {
        alert("not so hello world")
      }
    })
  });
};

google.maps.event.addDomListener(window, 'load', initialize);