// script.js
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("age-check-modal");
    const overlay = document.querySelector(".overlay");
    const yesButton = document.getElementById("age-yes");
    const noButton = document.getElementById("age-no");
  
    // Checker om alderen allerede er verificeret i session storage og viser modalen hvis ikke
    if (sessionStorage.getItem("ageVerified") === "true") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  
    yesButton.addEventListener("click", function() {
      sessionStorage.setItem("ageVerified", "true");
      modal.style.display = "none";
    });
  
    noButton.addEventListener("click", function() {
      alert("Du skal være mindst 18 år for at besøge denne side, \nselvom det er alkoholfriøl.");
    });
});
  