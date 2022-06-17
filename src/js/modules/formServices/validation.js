import FormBase from "./formBase";

export default class Validation extends FormBase {
    constructor (formSel, dataCheckSel) {
        super (formSel, dataCheckSel);
    }

    init () {
        this.dataCheck.forEach(item => {
            if (item.getAttribute('id') === 'email') {
                item.addEventListener('input', (e) => {
                    if (item.value.length >= 50) {
                        item.value = item.value.slice(0,50);
                    }
                    this.checkEmailInput(item);
                });
                item.addEventListener('blur', (e) => this.checkEmailInput(item));
            }
            if (item.getAttribute('id') === 'name') {
                item.addEventListener('input', (e) => this.checkNameInput(item));
            }
        });
    }

    checkEmailInput (item) {
        let regexpEmail = /^([\.\_a-zA-Z0-9])+@([a-zA-Z]){2,8}\.([a-zA-Z]){2,6}$/;
        item.value = item.value.replace(/[^\ \w\d@\-\.]/, '');
        if (regexpEmail.test(item.value)) {
            item.setAttribute('data-check', '');
        } else {
            item.setAttribute('data-check', 'empty');
        }
    }

    checkNameInput (item) {
        item.value = item.value.replace(/[^a-zA-Zа-яА-Я\-\_\ ]/, '');
        if (item.value.length >= 24) {
            item.value = item.value.slice(0,26);
        }
    }
}
