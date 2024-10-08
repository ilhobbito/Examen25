const api = document.getElementById("api")
let options =
 {
    method: 'GET',
    headers: { 'X-Api-Key':'pCKeYmBxm0rhAA1nkemWCw==OIGBh8O0sYv49zm2' }
  }

fetch('https://api.api-ninjas.com/v1/cats?name=aegean', options)
  .then(response => response.json())
  .then(function(data){ 
    console.log("apidata",data)

    document.getElementById("api").innerHTML = data[0].origin + "Hej!"
  }
)
  .catch(error => console.log("apifel",error));













  document.addEventListener('DOMContentLoaded', function() {
    function changeImage() {
        var image = document.getElementById('bildbyte');
        if (image && image.src.match("images/pablo-picasso.jpg")) {
            image.src = "images/pablo2.jpg"; 
        } else if (image) {
            image.src = "images/pablo-picasso.jpg";
        } else {
            console.error("Image element not found.");
        }
    }

    var changeImageButton = document.getElementById('changeImageButton');
    if (changeImageButton) {
        changeImageButton.addEventListener('click', changeImage);
    } else {
        console.error("Knapp ej funnen.");
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
    openStreetMap(latitude, longitude);
}

function errorCallback(error) {
    alert(error.message);
}

function openStreetMap(lat, long) {
    let mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=" + 
                 (long - 0.01) + "," + (lat - 0.01) + "," + (long + 0.01) + "," + (lat + 0.01);

    document.getElementById("map").src = mapUrl;
}
