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
    const textArray = [
      "Hem Chandra Upadhyay",
      "Cloud engineer",
      "DevOps engineer",
    ];
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

  const counter = document.getElementById("counter");

  // Function to format the count
  function formatCount(count) {
    if (count >= 1000000) {
      // If count is in millions, format it accordingly
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      // If count is in thousands, format it accordingly
      return (count / 1000).toFixed(1) + "K";
    } else {
      // Otherwise, just return the count
      return count;
    }
  }

  // Function to fetch the count from the URL and update the counter
  async function updateCounter() {
    try {
      // Fetch the count from the URL
      const response = await fetch(
        "https://rrorh2oecyroizs56oq2ffoilm0hsyfm.lambda-url.ap-south-1.on.aws/"
      );
      // Parse the response as JSON
      const data = await response.json();
      // Format the count
      const formattedCount = formatCount(data);
      // Update the counter element with the formatted count
      counter.textContent = formattedCount;
    } catch (error) {
      // Handle any errors
      console.error("Error fetching count:", error);
    }
  }

  // Call the updateCounter function to initially fetch and display the count
  updateCounter();
})();
