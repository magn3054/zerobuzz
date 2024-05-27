// script.js
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("age-check-modal");
    const content = document.getElementById("content");
    const yesButton = document.getElementById("age-yes");
    const noButton = document.getElementById("age-no");
  
    // Check if age is already verified in session storage
    if (sessionStorage.getItem("ageVerified") === "true") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  
    yesButton.addEventListener("click", function() {
      sessionStorage.setItem("ageVerified", "true");
      modal.style.display = "none";
      // content.style.display = "block";
    });
  
    noButton.addEventListener("click", function() {
      alert("Du skal være mindst 18 år for at besøge denne side, \nselvom det er alkoholfriøl.");
    });
});
  