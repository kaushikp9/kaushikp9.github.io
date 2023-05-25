window.addEventListener("scroll", animateContainers);

function animateContainers() {
  var containers = document.getElementsByClassName("containerEvent");
  for (var i = 0; i < containers.length; i++) {
    var container = containers[i];
    var containerPosition = container.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (containerPosition < windowHeight) {
      if (container.id === "container2") {
        container.classList.add("slide-in-left");
      } else {
        container.classList.add("slide-in-right");
      }
    }
  }
}

var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;
