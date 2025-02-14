function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

export class Pole {
    constructor(el) {
        this.el = el;
        this.pole = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.pole_ids = [];
        for (let item of this.el.querySelectorAll(".line__item")) {
            this.pole_ids.push(item.id);
        }
    }
    setNextKrot(krot) {
        for (let i = 0; i < this.pole.length; i++) {
            if (this.pole[i] === 1) {
                this.pole[i] = 0;
                this.el.querySelector("#" + this.pole_ids[i]).classList.remove("krot");
                break;
            }
        }
        krot = randomInteger(0, this.pole.length - 1);
        this.pole[krot] = 1;
        this.el.querySelector("#" + this.pole_ids[krot]).classList.add("krot");
    }
}
