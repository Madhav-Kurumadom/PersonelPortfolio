document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const loading = form.querySelector(".loading");
  const errorMessage = form.querySelector(".error-message");
  const sentMessage = form.querySelector(".sent-message");

  loading.style.display = "block";
  errorMessage.style.display = "none";
  sentMessage.style.display = "none";

  const formData = new FormData(form);

  fetch("https://formspree.io/f/abcdwxyz", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => {
      loading.style.display = "none";
      if (response.ok) {
        sentMessage.style.display = "block";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    })
    .catch(() => {
      loading.style.display = "none";
      errorMessage.innerHTML = "Something went wrong. Please try again.";
      errorMessage.style.display = "block";
    });
});
