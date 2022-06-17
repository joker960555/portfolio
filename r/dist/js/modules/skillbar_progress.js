export default class SkillbarProgress {
    constructor ({
        skillbarSel = null,
        skillbarProgressSel = null,
        skillbarTypeSel = null
    }) {
        this.skillbar = document.querySelectorAll(skillbarSel);
        this.skillbarProgress = document.querySelectorAll(skillbarProgressSel);
        this.skillbarType = document.querySelector(skillbarTypeSel);
    }
}