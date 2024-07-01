function showForm() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("form-container2").style.display = "none"; // hide the other form
}

function showForm2() {
    document.getElementById("form-container2").style.display = "block";
    document.getElementById("form-container").style.display = "none"; // hide the other form
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
