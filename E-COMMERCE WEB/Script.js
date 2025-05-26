var sidenavbar = document.querySelector(".side-navbar")



function showsidenav() {
    sidenavbar.style.left = "0"
}
function closesidenav() {
    sidenavbar.style.left = "-50%"
}


//contact submit button



var submit = document.getElementById("submit")
submit.addEventListener("click", function
    (event) {

    event.preventDefault()
    alert("Your Details Submitted")

})
