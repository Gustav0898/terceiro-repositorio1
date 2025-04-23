
document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const increaseFontBtn = document.getElementById("increase-font");
    const decreaseFontBtn = document.getElementById("decrease-font");

    let darkMode = false;
    let fontSize = 100;

    toggleThemeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        darkMode = !darkMode;
    });

    increaseFontBtn.addEventListener("click", function () {
        fontSize += 10;
        document.body.style.fontSize = fontSize + "%";
    });

    decreaseFontBtn.addEventListener("click", function () {
        fontSize -= 10;
        document.body.style.fontSize = fontSize + "%";
    });
});
