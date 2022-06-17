import Hamburger from './modules/hamburger';
import SkillbarProgress from './modules/skillbarProgress';
import Form from './modules/formServices/form';
import Validation from './modules/formServices/validation';


window.addEventListener('DOMContentLoaded', () => {
'use strict';

const hamburgerMenu = new Hamburger({
    selMenuHamb: '.menu',
    selOpen: 'label.hamburger',
    selClose: '.menu__close',
    selOverlay: '.menu__overlay'
});
hamburgerMenu.init();

const skillbar = new SkillbarProgress ({
    numFields: '.skillbar__item_percent'
});
skillbar.render();

const form = new Form ({
    formSel: '.contacts__form',
    submitBtnBlockSel : '.contacts__wrapper-btn',
    messageBlockSel: '.contacts__form_message',
    dataCheckSel: '[data-check]'
});
form.init();
const validationEmail = new Validation ({
    dataCheckSel: '[data-check]'
});
validationEmail.init(); 


});