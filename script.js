const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("click", () => {
  if (checkbox.checked == true) {
    document.body.classList.add("bg-dark", "text-light");
  } else {
    document.body.classList.remove("bg-dark", "text-light");
  }
});

var typed = new typed(".type", {
  string: ["Frontend dev ", "web dev"],
  typeSpeed: 100,
  backSpeed: 500,
  backDelay: 1000,
  loop: true,
});
