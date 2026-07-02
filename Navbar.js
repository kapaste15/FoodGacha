const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const icon = hamburger.querySelector("i")

hamburger.addEventListener("click", () => {
    icon.classList.toggle("bi-list")
    icon.classList.toggle("bi-x-lg")

})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        icon.classList.toggle("bi-list")
        icon.classList.toggle("bi-x-lg")
    })
})