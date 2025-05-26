var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productitems = productcontainer.querySelectorAll("div")



search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productitems.length; count = count + 1) {
        var productname = productitems[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productitems[count].style.display = 'none'
        }
        else {
            productitems[count].style.display = "block"

        }
    }

})