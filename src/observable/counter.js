import { observable } from "mobx";

const counter = observable({
    number: 0,
    increase () { this.number += 1; console.log(this.number); },
    decrease () { this.number -= 1; console.log(this.number); },
});

export { counter };