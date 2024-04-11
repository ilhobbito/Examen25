const api = document.getElementById("api")
let options =
 {
    method: 'GET',
    headers:
     { [
       {
          "ingredients": 
          [
            "4.5 cl (3 parts) vodka",
            "9 cl (6 parts) Tomato juice",
            "1.5 cl (1 part) Lemon juice",
            "2 to 3 dashes of Worcestershire Sauce",
            "Tabasco sauce",
            "Celery salt",
            "Black pepper"
          ],
          "instructions": "Stirring gently, pour all ingredients into highball glass. Garnish.",
          "name": "bloody mary"
        }
       ]
      :'pCKeYmBxm0rhAA1nkemWCw==OIGBh8O0sYv49zm2'}
  }


fetch('https://api.api-ninjas.com/v1/cocktail', options)
  .then(response => response.json())
  .then(function(data){ 
    console.log(data)

    document.getElementById("info").innerHTML = data[0].origin
  }
)
  .catch(error => console.log(error));

  document.addEventListener('DOMContentLoaded', function() {
    function changeImage() {
        var image = document.getElementById('bildbyte');
        if (image && image.src.match("images/pablo-picasso.jpg")) {
            image.src = "images/pablo2.jpg"; // Change to the new image
        } else if (image) {
            image.src = "images/pablo-picasso.jpg"; // Change back to the original image
        } else {
            console.error("Image element not found.");
        }
    }

    // Attach the click event listener to the button if it exists
    var changeImageButton = document.getElementById('changeImageButton');
    if (changeImageButton) {
        changeImageButton.addEventListener('click', changeImage);
    } else {
        console.error("Button element not found.");
    }
});


let statusText = document.getElementById("status");

document.getElementById("findme").addEventListener("click", geoFindMe);

function geoFindMe() {
    if (!navigator.geolocation) {
        statusText.innerHTML = "Det finns ingen geo-funktion!";
    } else {
        statusText.innerHTML = "Letar...";
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    statusText.innerHTML = "Latitud: " + latitude + ", Longitud: " + longitude;

    // Update the map iframe with the new coordinates
    openStreetMap(latitude, longitude);
}

function errorCallback(error) {
    alert(error.message);
}

function openStreetMap(lat, long) {
    // Construct the URL for embedding OpenStreetMap
    let mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=" + 
                 (long - 0.01) + "," + (lat - 0.01) + "," + (long + 0.01) + "," + (lat + 0.01);

    // Update the src attribute of the map iframe
    document.getElementById("map").src = mapUrl;
}
