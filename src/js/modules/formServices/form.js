import FormBase from "./formBase";

export default class Form extends FormBase {
    constructor (
        formSel, submitBtnBlockSel, messageBlockSel, dataCheckSel
    ) {
        super (formSel, submitBtnBlockSel, messageBlockSel, dataCheckSel);

    }

    init () {
        this.triggerFormSubmit();
        this.checkEmptiesOnBlur();
    }

    triggerFormSubmit () {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (event.type !== 'submit') {                                      // <== need EmptyCheck
                return;
            } else {
                this.formDataToJSON();
                this.postData(this.formDataToJSON())
                .then(responseData => {
                    console.log(responseData);
                    this.createMessage(this.messages.success);
                    this.form.reset();
                })
                .catch(error => {
                    console.log(`Something went wrong - ${error}`);
                    this.createMessage(this.messages.failure);
                })
                .finally(() => {
                    setTimeout(() => {
                        this.toggleMessageBlock();
                        this.createMessage('');
                    }, 5000);
                });
            }
        });
    }

    formDataToJSON () {
        const formData = new FormData(this.form);
        let jsonData = {};
        formData.forEach((item, i) => {
            jsonData[i] = item;
        });
        return JSON.stringify(jsonData);
    }

    async postData (jsonData) {
        this.toggleMessageBlock();
        this.createMessage(this.messages.loading);
        const status = this.checkEmpties();
        let response = await fetch(this.url, {
            method: 'POST',
            body: jsonData,
            headers: this.headers
        });
        if (response.ok && status === '') {
            return await response.json();
        } else {
            return await response
            .then(error => {
                this.createMessage(this.messages.failure);
                const e = new Error('Что-то пошло не так');
                e.data = error;
                throw e;
            });
        }
    }

    checkEmpties () {
        let status = '';
        this.dataCheck.forEach(item => {
            if (item.getAttribute('id') === 'privacyPol') {
                this.checkPolicyBox(item);
                item.addEventListener('click', () => this.checkPolicyBox(item));
            }
            if (item.value === '' || 
                    item.getAttribute('data-check') === 'empty') {
                item.setAttribute('placeholder', '"*" fields are required to fill');
                item.setAttribute('data-check', 'empty');  
                status = 'empty';    
            } else {
                item.setAttribute('placeholder', '');
                item.setAttribute('data-check', '');
            }
        });
        return status;
    }

    checkEmptiesOnBlur () {
        this.dataCheck.forEach(item => {
            item.addEventListener('blur', () => {
                if (item.value === '') {
                    item.setAttribute('data-check', 'empty');  
                } else {
                    item.setAttribute('data-check', '');
                }
            });
        });
    }

    toggleMessageBlock () {
        Array.from(this.submitBtnBlock.children).forEach(item => {
                item.classList.toggle('active');
        });
    }

    checkPolicyBox (item) {
        let policy = document.querySelectorAll('.privacy_agreement');
            item.checked ? 
            policy.forEach(elem => elem.setAttribute('data-check', '')) :
            policy.forEach(elem => elem.setAttribute('data-check', 'empty'));
    }

    createMessage (message) {
        this.messageBlock.textContent = `${message}`; 
    }
    
}