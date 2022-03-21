import scroll from './modules/scrollAnimation';
import headerModal from './modules/modals';
import timer from './modules/timer';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

scroll();
headerModal();
timer('25 march 2022');
slider();
let calcCount = true;
try {
    calc();
} catch {
    calcCount = false;
}

sendForm(calcCount);