const $menuBtn = document.querySelector("#icon-menu");

$menuBtn.addEventListener("click", () => {
    const menu = document.querySelector("#menu").style.display;
    if (menu != "block") {
        document.querySelector("#menu").style.display = "block";
    } else {
        document.querySelector("#menu").style.display = "none";
    }
});