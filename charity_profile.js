document.addEventListener("DOMContentLoaded", function () {
    const volunteerForm = document.getElementById("volunteer-form");
    const volunteerBtn = document.querySelector('a[href="charity_profile.html#volunteer-form"]');
  
    // Show form on direct link OR when clicking the nav button
    if (window.location.hash === "#volunteer-form") {
      volunteerForm.style.display = "block";
      volunteerForm.scrollIntoView({ behavior: "smooth" });
    }
  
    if (volunteerBtn) {
      volunteerBtn.addEventListener("click", function (e) {
        // If already on charity_profile.html, reveal the form
        if (window.location.pathname.includes("charity_profile.html")) {
          e.preventDefault();
          volunteerForm.style.display = "block";
          volunteerForm.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Handle "More Info" toggles
    const toggleButtons = document.querySelectorAll(".toggle-info");
    toggleButtons.forEach(button => {
      button.addEventListener("click", function () {
        const info = this.nextElementSibling;
        if (info.style.display === "none" || info.style.display === "") {
          info.style.display = "block";
          this.textContent = "Hide Info";
        } else {
          info.style.display = "none";
          this.textContent = "More Info";
        }
      });
    });
  });