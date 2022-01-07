let menuVisible = false;
let openMenu = function () {

    let sidebar = document.querySelector(".nav-sidebar");
    let sidebarUl = document.querySelector(".nav-sidebar ul");
    sidebarUl.style.opacity = 1;
    sidebar.classList.add("showing");
    sidebar.style.width = "200px";
    menuVisible = true;
};

let closeMenu = function () {
    let sidebar = document.querySelector(".nav-sidebar");
    let sidebarUl = document.querySelector(".nav-sidebar ul");
    sidebar.style.width = "50px";
    sidebar.classList.remove("showing");
    sidebarUl.style.opacity = 0;
    menuVisible = false;
};

let toggleMenu = function () {

    if (menuVisible) {
        closeMenu();
    }
    else {
        openMenu();
    }
}

let menuButton = document.querySelector(".btn-toggle-nav");
menuButton.addEventListener("mouseover", function () { openMenu(); });
/*let sidebar = document.querySelector(".nav-sidebar");
sidebar.addEventListener("mouseout", function () { closeMenu(); }); 
maar als er binnen de sidebar van het menuknop-element naar een ander element wordt gegaan, wordt het menu ook al gesloten voordat er een kleur kan worden gekozen.
*/

let setBackgroundColor = function (color) {
    document.body.style.backgroundColor = color;
    let colorChoice = document.getElementById("chosen-color");
    colorChoice.innerHTML = "Your choice was " + color + ".";

    closeMenu();
}

let firstButton = document.querySelector(".first-body-background");
firstButton.addEventListener("click", function () { setBackgroundColor("LightSteelBlue"); });

let secondButton = document.querySelector(".second-body-background");
secondButton.addEventListener("click", function () { setBackgroundColor("CornflowerBlue"); });

let thirdButton = document.querySelector(".third-body-background");
thirdButton.addEventListener("click", function () { setBackgroundColor("MediumSlateBlue"); });

let fourthButton = document.querySelector(".fourth-body-background");
fourthButton.addEventListener("click", function () { setBackgroundColor("DarkSlateBlue"); });

let fifthButton = document.querySelector(".fifth-body-background");
fifthButton.addEventListener("click", function () { setBackgroundColor("Purple"); });

window.addEventListener('keydown', function (evt) {
    if (evt.key === "1") { setBackgroundColor("LightSteelBlue"); }
    else if (evt.key === "2") { setBackgroundColor("CornflowerBlue"); }
    else if (evt.key === "3") { setBackgroundColor("MediumSlateBlue"); }
    else if (evt.key === "4") { setBackgroundColor("DarkSlateBlue"); }
    else if (evt.key === "5") { setBackgroundColor("Purple"); }
});
