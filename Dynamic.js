function validateRegisterForm() {
  const errorMessages = [];
  const firstName = document.querySelector('input[placeholder="First name"]');
  const lastName = document.querySelector('input[placeholder="Last name"]');
  const userName = document.querySelector('input[placeholder="User name"]');
  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');

  // Validate First Name
  if (!/^[A-Za-z]{1,20}$/.test(firstName.value)) {
    errorMessages.push(
      "First name must contain only letters and be 1-20 characters long."
    );
  }
  // Validate Last Name
  if (!/^[A-Za-z]{1,20}$/.test(lastName.value)) {
    errorMessages.push(
      "Last name must contain only letters and be 1-20 characters long."
    );
  }
  // Validate User Name
  if (!/^[A-Za-z0-9_.]{3,20}$/.test(userName.value)) {
    errorMessages.push(
      "User name must be 3-20 characters long and can include letters, numbers, underscores, and periods."
    );
  }
  // Validate Email
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    errorMessages.push("Please enter a valid email address.");
  }
  // Validate Password
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(
      password.value
    )
  ) {
    errorMessages.push(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
    );
  }

  if (errorMessages.length > 0) {
    document.getElementById("errorMessages").innerHTML =
      errorMessages.join("<br>");
    return false; // Prevent form submission
  }
  return true; // Form is valid
}

function validateLoginForm() {
  const errorMessages = [];
  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');

  // Validate Email
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    errorMessages.push("Please enter a valid email address.");
  }
  // Validate Password
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(
      password.value
    )
  ) {
    errorMessages.push(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
    );
  }

  if (errorMessages.length > 0) {
    document.getElementById("errorMessages").innerHTML =
      errorMessages.join("<br>");
    return false; // Prevent form submission
  }
  return true; // Form is valid
}

function validatePasswordResetForm() {
  const errorMessages = [];
  const email = document.querySelector('input[type="email"]');
  // Validate Email
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    errorMessages.push("Please enter a valid email address.");
  }

  if (errorMessages.length > 0) {
    document.getElementById("errorMessages").innerHTML =
      errorMessages.join("<br>");
    return false; // Prevent form submission
  }
  return true; // Form is valid
}



//Search bar filter
document.getElementById("searchBar").addEventListener("input", function () {
  let searchValue = this.value.toLowerCase();
  let products = document.querySelectorAll(".card");

  products.forEach(product => {
      let title = product.querySelector(".text-title").textContent.toLowerCase();
      let description = product.querySelector(".text-body").textContent.toLowerCase();

      if (title.includes(searchValue) || description.includes(searchValue)) {
          product.style.display = "flex";
      } else {
          product.style.display = "none";
      }
  });
});



//Access product details page by the product id
function goToDetails(productId) {  
  window.location.href = `Details.html?product=${productId}`;  
} 
