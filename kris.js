document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector(".toggle-button");
    var sidebar = document.getElementById("sidebar");
    var sidebarVisible = false;

    toggleButton.onclick = function() {
        if (sidebarVisible) {
            sidebar.style.left = "-100%";
            sidebarVisible = false;
        } else {
            sidebar.style.left = "0";
            sidebarVisible = true;
        }
    };
    
    window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
            toggleButton.style.display = "block";
            sidebar.style.left = "-100%";
            sidebarVisible = false;
        } else {
            toggleButton.style.display = "none";
            sidebar.style.left = "0";
            sidebarVisible = true;
        }
    });
});