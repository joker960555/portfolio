export default class Hamburger {
    constructor ({
        selMenuHamb = null,
        selOpen = null,
        selClose = null,
        selOverlay = null
    }) {
        this.menuHamb = document.querySelector(selMenuHamb);
        this.openTrigger = document.querySelector(selOpen);
        this.closeTrigger = document.querySelector(selClose);
        this.overlayTrigger = document.querySelector(selOverlay);
        this.allCloseTriggers = [this.closeTrigger, this.overlayTrigger];
    }

    init () {
        this.triggerOpen();
        this.triggerClose();
        this.keyDownClose();
    }

    triggerOpen () {
        this.openTrigger.addEventListener('click', (e) => {
            if (!e.target) {
                return;
            } else {
                this.menuHamb.classList.add('active');
            }
        });
    }

    triggerClose () {
        this.allCloseTriggers = [this.closeTrigger, this.overlayTrigger];

        this.allCloseTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (!e.target) {
                    return;
                } else {
                    if (this.menuHamb.matches('.active')) {
                        this.menuHamb.classList.remove('active');
                    }
                }
            });
        });
    }

    keyDownClose () {
        window.addEventListener('keydown', (e) => {
            if (this.menuHamb.matches('.active') && e.key === 'Escape') {
                this.menuHamb.classList.remove('active');
            }
        });
    }
}