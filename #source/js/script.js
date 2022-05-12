const headerBurger = document.querySelector(".burger-menu")
const headerContent = document.querySelector(".menu__nav")

headerBurger.addEventListener("click", e => {
    headerBurger.classList.toggle("active")
    headerContent.classList.toggle("active")
    document.body.classList.toggle("lock")
})

