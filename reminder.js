const mealmor = document.querySelectorAll(".mealMor");
const medmor = document.querySelectorAll(".medMor");
const mealaft = document.querySelectorAll(".mealAft");
const medaft = document.querySelectorAll(".medAft");
const mealeve = document.querySelectorAll(".mealEve");
const medeve = document.querySelectorAll(".medEve");

// Function to display an alert with a message
function showAlert(reminderType) {
  const userDateTime = document.getElementById("datetime").value;
  localStorage.setItem("userDateTime", userDateTime);

  alert("Date and time stored in local storage.");
}

// Add click event listeners to the buttons with specific reminder types
mealmor.forEach((button) => {
  button.addEventListener("click", showAlert);
});

medmor.forEach((button) => {
  button.addEventListener("click", showAlert);
});

mealaft.forEach((button) => {
  button.addEventListener("click", showAlert);
});

medaft.forEach((button) => {
  button.addEventListener("click", showAlert);
});

mealeve.forEach((button) => {
  button.addEventListener("click", showAlert);
});

medeve.forEach((button) => {
  button.addEventListener("click", showAlert);
});