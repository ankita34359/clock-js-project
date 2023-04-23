// Define a Function

function updateClock(){
  // Date Object represent the current date 
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // formate : HH:MM:SS
  const timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").textContent =  timeString;

  
}

// Call the updateClock function every 1 sec (1000 mil sec) using setInterval method

setInterval(updateClock, 1000);