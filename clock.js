function updateClock() { 
    var now = new Date(); 
    var hours = now.getHours(); 
    var minutes = now.getMinutes(); 
    var seconds = now.getSeconds(); 
    var meridiem = "AM"; // Default to AM

    // Convert hours to 12-hour format and determine meridiem
    if (hours >= 12) {
        meridiem = "PM";
        hours = hours % 12 || 12; // Handle 12 PM case
    } else {
        meridiem = "AM";
    }

    // Pad single digit minutes and seconds with leading zeros
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    // Concatenate time string with AM/PM indicator
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem; 

    // Update the clock display
    document.getElementById("clock").innerHTML = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000); 

// Initial call to updateClock function
updateClock();
