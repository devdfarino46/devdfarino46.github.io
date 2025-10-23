"use strict";
(() => {
    const themesNav = document.querySelector('.themes-nav');
    if (!themesNav)
        return;
    const buttons = themesNav.querySelectorAll('.themes-nav__list button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(el => el.classList.remove('--active'));
            btn.classList.add('--active');
        });
    });
})();
(() => {
    const blogArticles = document.querySelector('.blog-articles');
    if (!blogArticles)
        return;
    const button = document.querySelector('.blog-articles .button');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        button.classList.add('--is-loading');
    });
})();
document.querySelectorAll('.video').forEach(video => {
    const videoElem = video.querySelector('video');
    const button = video.querySelector('.video__button');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        if (!videoElem)
            return;
        videoElem.controls = true;
        button.classList.add('--hidden');
        videoElem.play();
    });
});
//# sourceMappingURL=df_main.js.map
