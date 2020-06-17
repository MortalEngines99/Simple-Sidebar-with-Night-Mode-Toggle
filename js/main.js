const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const toggleColorModeBtn = document.getElementById("toggle-mode");
const sidebar = document.getElementById("sidebar");


openSidebarBtn.addEventListener("click",openSideBar);
closeSideBarBtn.addEventListener("click",closeSideBar);
toggleColorModeBtn.addEventListener("click",changeMode);

function openSideBar(){
        anime({
            targets:sidebar,
            left: "0%",
            easing:"easeOutQuint",
        })
}
function closeSideBar(){
        anime({
            targets:sidebar,
            left: "-100%",
            duration:700,
            easing:"easeInQuart"
        })
}

function changeMode(){
    document.getElementsByTagName("body")[0].classList.toggle("dark");
    document.getElementsByClassName("button-primary")[0].classList.toggle("dark");
    document.getElementById("sidebar").classList.toggle("dark");
    document.querySelectorAll(".button-secondary").forEach((element) => {
        element.classList.toggle("dark");
    })
}