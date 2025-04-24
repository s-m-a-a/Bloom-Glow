

document.getElementById('registrationForm').addEventListener('submit', function(event) {  
  event.preventDefault(); // Prevent form submission  
  const name = document.getElementById('name').value.trim();  
  const email = document.getElementById('email').value.trim();  
  const password = document.getElementById('password').value.trim();  
  const errorMessages = [];  
  
  // Validate Name  
  const nameRegex = /^[A-Za-z\s'-]{2,}$/;  
  if (!nameRegex.test(name)) {  
      errorMessages.push("Name must be at least 2 characters long and can contain letters, spaces, apostrophes, or hyphens.");  
  }  
  
  // Validate Email  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
  if (!emailRegex.test(email)) {  
      errorMessages.push("Please enter a valid email address.");  
  }  

  // Validate Password  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;  
  if (!passwordRegex.test(password)) {  
      errorMessages.push("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");  
  }  

  // Display Errors or Success  
  const errorMessagesDiv = document.getElementById('errorMessages');  
  errorMessagesDiv.innerHTML = ''; // Clear previous messages  
  
  if (errorMessages.length > 0) {  
      errorMessages.forEach(message => {  
          errorMessagesDiv.innerHTML += `<p>${message}</p>`;  
      });  
  } else {  
      errorMessagesDiv.innerHTML = '<p style="color: green;">Registration successful!</p>';  
      // Here you can proceed with form submission or further logic  
  }  
});  
