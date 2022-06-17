export default class SkillbarProgress {
    constructor ({
        skillbarSel = null,
        percentMeterSel = null,
        skillbarTypeSel = null
    }) {
        this.skillbar = document.querySelectorAll(skillbarSel);
        this.percentMeter = document.querySelectorAll(percentMeterSel);
        this.skillbarType = document.querySelector(skillbarTypeSel);
    }

    render () {
        // console.log(111, this.skillbarType.closest('.skillbar__item_progress-bar'));
        console.log(211);
    }

}