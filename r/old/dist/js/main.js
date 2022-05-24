import Hamburger from './modules/hamburger';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

const hamburgerMenu = new Hamburger({
    selMenuHamb: '.menu',
    selOpen: 'label.hamburger',
    selClose: '.menu__close',
    selOverlay: '.menu__overlay'
});
hamburgerMenu.init();

});