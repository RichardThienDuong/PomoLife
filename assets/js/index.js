// Load the Google Maps JavaScript API using a callback function
function loadMap() {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCaCqS6aD8sKVbzO0wnaG1NTek9GZ_w0j4&callback=initMap';
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}

// Initialize the map
function initMap() {
  // Create a new map object
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

// Call the loadMap() function to load the Google Maps JavaScript API and initialize the map
loadMap();


const greeting = [
    "Good morning, sunshine!",
    "It's wonderful to see you today!",
    "Good morning, I hope your day is off to a great start.",
    "It's a great day! Let's get to work!"
]
const randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];

let myGreeting = document.getElementById("greetings");

myGreeting.textContent = randomGreeting;

// Set up the Google Places API key
const apiKey = 'AIzaSyCaCqS6aD8sKVbzO0wnaG1NTek9GZ_w0j4';

// Get a reference to the input element
const inputElement = document.querySelector('#location-input');

// Set up an event listener for changes to the input element
inputElement.addEventListener('input', () => {
  // Get the current value of the input element
  const inputValue = inputElement.value;

  // Make a request to the Google Places API for autocomplete suggestions
  const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input=${inputValue}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Parse the response to get the list of suggested locations
      const suggestions = data.predictions.map(prediction => prediction.description);

      // Display the list of suggested locations in a dropdown menu or similar interface element
      const selectElement = document.createElement("select");
      suggestions.forEach(suggestion => {
        const optionElement = document.createElement("option");
        optionElement.text = suggestion;
        selectElement.add(optionElement);
      })

      // When the user selects a suggested location, update the input element with the selected value
      inputElement.replaceWith(selectElement);
    });
});

