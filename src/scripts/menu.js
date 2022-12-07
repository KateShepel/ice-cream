(() => {
    const menuBtnOpenRef = document.querySelector("[data-menu-button-open]");
    const menuBtnCloseRef = document.querySelector('[data-menu-button-close]');
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnOpenRef.addEventListener("click", () => {
        const expanded =
            menuBtnOpenRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnOpenRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    });

    menuBtnCloseRef.addEventListener('click', () => {
        const expanded = menuBtnCloseRef.getAttribute('aria-expanded') === 'true' || false;
        menuBtnCloseRef.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
    });
})();