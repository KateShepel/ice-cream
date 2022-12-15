(()=>{
    const menuBtnOpenRef = document.querySelector("[data-menu-button-open]");
    const menuBtnCloseRef = document.querySelector("[data-menu-button-close]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const homeLinkRef = document.querySelector("[data-default-focus]");
    menuBtnOpenRef.addEventListener("click", ()=>{
        const expanded = menuBtnOpenRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnOpenRef.setAttribute("aria-expanded", !expanded);
        menuBtnCloseRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
        homeLinkRef.focus();
    });
    menuBtnCloseRef.addEventListener("click", ()=>{
        const expanded = menuBtnCloseRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnOpenRef.setAttribute("aria-expanded", !expanded);
        menuBtnCloseRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    });
})();

//# sourceMappingURL=index.c6e2c308.js.map
