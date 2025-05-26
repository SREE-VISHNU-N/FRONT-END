var blacklayer = document.querySelector(".blacklayer")
var popupbox = document.querySelector('.popup-box')
var popupbutton = document.getElementById("popupbutton")


popupbutton.addEventListener("click", function () {

    blacklayer.style.display = "block"
    popupbox.style.display = "block"

})


var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function
    (event) {

    event.preventDefault()
    blacklayer.style.display = "none"
    popupbox.style.display = "none"


})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")


addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
                   <h4>${bookauthor.value}</h4>
                   <p>${bookdescription.value}</p>
                   <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    blacklayer.style.display = "none"
    popupbox.style.display = "none"


})

function deletebook(event) {
    event.target.parentElement.remove()
} 