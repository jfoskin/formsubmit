let clickMessage = document.getElementById("message");
let clickProject = document.getElementById("project");
let clickBtn = document.getElementById("btn");

function project() {
  clickMessage.style.left = "-400px";
  clickProject.style.left = "50px";
  clickBtn.style.left = "110px";
}
function message() {
  clickMessage.style.left = "50px";
  clickProject.style.left = "450px";
  clickBtn.style.left = "0";
}
