// script.js
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("age-check-modal");
    const overlay = document.querySelector(".overlay");
    const yesButton = document.getElementById("age-yes");
    const noButton = document.getElementById("age-no");
  
    // Check if age is already verified in session storage
    if (sessionStorage.getItem("ageVerified") === "true") {
      modal.style.display = "none";
      overlay.style.opacity = "1";
    } else {
      modal.style.display = "block";
    }
  
    yesButton.addEventListener("click", function() {
      sessionStorage.setItem("ageVerified", "true");
      modal.style.display = "none";
      overlay.style.opacity = "1";
    });
  
    noButton.addEventListener("click", function() {
      alert("Du skal være mindst 18 år for at besøge denne side, \nselvom det er alkoholfriøl.");
    });
});
  