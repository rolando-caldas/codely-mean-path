import { log } from './utils.js';
import './styles.css';

const me = {
    name: "rolando",
    city: "Vigo"
};

const you = {...me};
const him = {...me};

console.log(you === me);
console.log(him === you);


log("hola");