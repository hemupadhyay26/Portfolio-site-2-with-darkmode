(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Hem Chandra Upadhyay", "Cloud engineer", "DevOps engineer"];
    const dynamicText = document.getElementById("dynamic-text");
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = textArray[arrayIndex];
      let displayText = currentText.slice(0, charIndex);

      dynamicText.textContent = displayText;

      if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        arrayIndex = (arrayIndex + 1) % textArray.length;
      }

      setTimeout(type, isDeleting ? 100 : 200); // Adjust typing speed
    }

    type();
  });
})();
