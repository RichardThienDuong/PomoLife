// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to get a cookie value
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  // Check if the user's name and location have already been saved in cookies
  var userName = getCookie("userName");
  var location = getCookie("location");
  
  // If the cookies don't exist, prompt the user to enter their name and location
  if (!userName || !location) {
    userName = prompt("Please enter your name:");
    location = prompt("Please enter your location (city, state):");
    
    // Save the user's name and location in cookies for future use
    setCookie("userName", userName, 365);
    setCookie("location", location, 365);
  }
  
  // Use the saved user's name and location to personalize the home page
  document.getElementById("welcome-message").innerHTML = "Welcome, " + userName + " from " + location + "!";