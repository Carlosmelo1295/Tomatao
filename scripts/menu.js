const $menuBtn = document.querySelector("#icon-menu");

$menuBtn.addEventListener("click", () => {
    const menu = document.querySelector("#menu").style.display;
    if (menu != "block") {
        document.querySelector("#menu").style.display = "block";
        $menuBtn.style.scale = "0.90"

    } else {
        document.querySelector("#menu").style.display = "none";
        $menuBtn.style.scale = "1.1"
    }
});