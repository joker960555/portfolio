export default class SkillbarProgress {
    constructor ({
        numFields = null
    }) {
        this.numFields = document.querySelectorAll(numFields);
    }

    render () {
        this.numFields.forEach(item => {
            this.changeSkillbar(item);

            item.addEventListener('click', () => {
                if (!this.input) {
                    this.input = document.createElement('input');
                    this.input.classList.add('skillbar__item_percent-input');
                    this.input.setAttribute('type', 'tel');
                    item.append(this.input);
                    this.input.focus();
                    this.input.addEventListener('input', (e) => {
                        e.target.value = e.target.value.replace(/\D/g, '');
                    });
                    this.removeInputOnClick();       // Listener For Toggling Input/numField
                    this.applySkillbarOnKeydown(item);
                }
            });
        });
    } 

    createInputOnClick () {

    }

    removeInputOnClick () {
        window.addEventListener('click', (e) => {
                if (this.input && e.button === 0 &&
                        !e.target.matches('.skillbar__item_percent')) {
                    this.input.remove();
                    this.input = false;
                }
        });
    }

    applySkillbarOnKeydown (numField) {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.changeSkillbar(numField);
                if (this.input) {
                    this.input.remove();
                    this.input = false;
                }
            }
        });
    }

    changeSkillbar (numField) {
        let value = 0;
        if (this.input) {
            value = this.input.value;
        } else {
            value = numField.textContent.replace(/\D/g, '');
        }
        numField.textContent = `${value}%`;
        if (this.input) {
            value = this.checkInputValue (numField, value);
        }
        numField.nextElementSibling.firstElementChild.style.cssText = `
            width: ${Math.round(value)}%;
            transition: all 0.5s;`;
    }

    checkInputValue (numField, value) {
        if (value > 100) {
            value = 100;
            numField.textContent = `${value}%`;
        } 
        return value;
    }

}