export default class FormBase {
    constructor ({
        formSel = null,
        submitBtnBlockSel = null,
        messageBlockSel = null,
        dataCheckSel = null       // Name&Email Inputs
    } = {}) {
        this.form = document.querySelector(formSel);
        this.submitBtnBlock = document.querySelector(submitBtnBlockSel);
        this.messageBlock = document.querySelector(messageBlockSel);
        this.dataCheck = document.querySelectorAll(dataCheckSel);

        this.url = 'assets/question.php';
        this.headers = {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        };
        this.messages = {
            success: "Congrats, you have succeded!",
            loading: "Please, wait untill it's done",
            failure: "Oops, something went wrong.."
        };

    }
    
}