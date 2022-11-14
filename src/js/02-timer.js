import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector('#datetime-picker');
const buttonStartRef = document.querySelector('[data-start]');

buttonStartRef.addEventListener('click', onBtnClick);
buttonStartRef.setAttribute('disabled', true);

flatpickr(inputRef, {
    onClose(selectedDates) {
       const time = selectedDates[0];
        if (time < new Date()) {
        window.alert("Please choose a date in the future")
        }
        else {time > new Date()
            buttonStartRef.removeAttribute('disabled');
           
        }
    }
})

 function onBtnClick() {
   console.log(time);
}
console.log('hello')
