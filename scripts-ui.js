document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById("greeting");
    const usernameElement = document.getElementById("username");
    const messageElement = document.getElementById("message");
    const today = new Date();
    const hour = today.getHours();
  
    let username = prompt("Por favor, ingresa tu nombre: 👇:");
  
    if (username === null || username === "") {
      username = "Stranger";
    }
  
    usernameElement.textContent = username;
  
    if (hour >= 5 && hour < 12) {
      greeting.textContent = "Good Morning, " + username + "!";
      messageElement.textContent = "Starting the day, we have a lot to do!";
    } else if (hour >= 12 && hour < 18) {
      greeting.textContent = "Good Afternoon, " + username + "!";
      messageElement.textContent = "It's the middle of the day, you can handle this!";
    } else if (hour >= 18 && hour < 22) {
      greeting.textContent = "Good Evening, " + username + "!";
      messageElement.textContent = "It's still today, don't give up!";
    } else {
      greeting.textContent = "Good Night, " + username + "!";
      messageElement.textContent = "It's time to rest or prepare for tomorrow!";
    }
  
    const currentDate = today.toDateString();
    const dateElement = document.getElementById("current-date");
    dateElement.textContent = currentDate;
  });
  