const sidebarLink = document.getElementById("sidebar")
const navbarItems = document.getElementById("navbar-items")
const mainContainer = document.getElementById("main-container")

sidebarLink.addEventListener("click", () => {
    navbarItems.classList.toggle("sidebar-toggle")
    mainContainer.classList.toggle("main-toggle")
})

// Links

const links = document.querySelectorAll(".links")
const iconsDiv = document.getElementById("icons")

links.forEach(link => {

    link.addEventListener("mouseover", () => {
        iconsDiv.setAttribute("style", "background-color: #40419b; transition: all .4s")
        link.style.color = "#fff"
    })

    link.addEventListener("mouseout", () => {
        iconsDiv.setAttribute("style", "background-color: #c5c5c5; transition: all .4s")
        link.style.color = "#40419b"
    })

});