// =====================
// Video Modal Functions
// =====================

function openModal(videoId) {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  frame.src = "";
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeModal();
  }
};

// =====================
// Expand Project Details
// =====================

function toggleDetails(button) {
  const details = button.nextElementSibling;

  if (details.classList.contains("open")) {
    details.classList.remove("open");
    button.textContent = "See More";
  } else {
    details.classList.add("open");
    button.textContent = "See Less";
  }
}

// =====================
// Toggle Between Sections
// =====================

function showSection(section) {

  const portfolio = document.getElementById("portfolio-section");
  const cv = document.getElementById("cv-section");
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (section === "portfolio") {
    portfolio.classList.remove("hidden");
    cv.classList.add("hidden");
    buttons[0].classList.add("active");
  } else {
    portfolio.classList.add("hidden");
    cv.classList.remove("hidden");
    buttons[1].classList.add("active");
  }
}
