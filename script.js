document
  .getElementById("your-button-id")
  .addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
    document.getElementById("your-button-id").style.display = "none";
    document.getElementById("centered").style.display = "none";
    document.getElementById("data").style.display = "flex";
    document.getElementById("inputs_").style.display = "block";
    document.getElementById("pin").style.display = "block";
    document.getElementById("container").style.display = "block";
    document.getElementById("middle").style.display = "flex";
  });

window.onload = function () {
  document.getElementById("latitude").value = "";
  document.getElementById("longitude").value = "";
};

var reqcount = 0;

function successCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } =
    position.coords;

  reqcount++;
  Accuracy.innerHTML = "These values are about " + accuracy + "% accurate";
  Latitude.innerHTML = latitude;
  Longitude.innerHTML = longitude;
}
function errorCallback(error) {}
var options = {
  //   enableHighAccuracy: false,
  //   timeout: 5000,
  //   maximumAge: 1,
};

$("#submit-button").click(function () {
  var lat = $("#latitude").val();
  var lng = $("#longitude").val();
  var location = lat + "," + lng;
  var googleMapsUrl = "https://www.google.com/maps?q=" + location;
  var googleMapsUrl = "https://www.google.com/maps?q=" + location;
  window.open(googleMapsUrl, "_blank");
});

const Latitude = document.getElementById("Latitude");
const Longitude = document.getElementById("Longitude");
const copyFeedback_1 = document.getElementById("copy-feedback_1");
const copyFeedback_2 = document.getElementById("copy-feedback_2");

Latitude.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  textArea.value = Latitude.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  copyFeedback_1.textContent = "Copied to clipboard!";
  copyFeedback_1.style.display = "block";
  setTimeout(() => {
    copyFeedback_1.style.display = "none";
  }, 200);
});

Longitude.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  textArea.value = Longitude.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  copyFeedback_2.textContent = "Copied to clipboard!";
  copyFeedback_2.style.display = "block";
  setTimeout(() => {
    copyFeedback_2.style.display = "none";
  }, 200);
});
