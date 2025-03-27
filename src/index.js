import "./style.css"
import { load as mainpage} from "./mainpage.js"
import { load as menu } from "./menu.js"
import { load as about} from "./about.js"


mainpage()

const nav = document.querySelector("nav")

nav.addEventListener("click", (e) => {
    if(e.target.classList.contains("active") || !e.target.classList.contains("menu-item")) return

    const active = document.querySelector(".active")
    active.classList.remove("active")
    if(e.target.classList.contains("home")){
        mainpage()
    }
    if(e.target.classList.contains("menu")){
        menu()
    }
    if(e.target.classList.contains("about")){
        about()
    }
    e.target.classList.add("active")
})
