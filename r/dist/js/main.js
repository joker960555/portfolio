import Hamburger from './modules/hamburger';
import SkillbarProgress from './modules/skillbarProgress';

window.addEventListener('DOMContentLoaded', () => {
'use strict';

const hamburgerMenu = new Hamburger({
    selMenuHamb: '.menu',
    selOpen: 'label.hamburger',
    selClose: '.menu__close',
    selOverlay: '.menu__overlay'
});
hamburgerMenu.init();

const skillbarSite = new SkillbarProgress ({
    skillbarSel: '.skillbar__item_progress-bar',
    percentMeterSel: '.skillbar__item_percent',
    skillbarTypeSel: '.complete_website'
});
skillbarSite.render();

});