const menuIcon = document.querySelector(".menu-icon");
    const navItems = document.querySelector(".item");

    menuIcon.addEventListener("click", () => {
        navItems.classList.toggle("active");
    });