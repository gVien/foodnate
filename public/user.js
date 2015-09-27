var dashButton = document.getElementById("dash-btn")
var donateButton = document.getElementById("donate-btn")
var dash = document.getElementById("dashboard")
var donate = document.getElementById("donate")

dashButton.onclick = function() {
  donate.style.display = "none";
  dash.style.display = "block"
}

donateButton.onclick = function() {
  dash.style.display = "none";
  donate.style.display = "block"
}