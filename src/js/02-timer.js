import { Notify } from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector('#datetime-picker');
const buttonStartRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
buttonStartRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chooseDate = Date.parse(selectedDates[0]);
    if (chooseDate <= Date.parse(new Date())) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    buttonStartRef.disabled = false;
    buttonStartRef.addEventListener('click', () => {
      buttonStartRef.disabled = true;
      inputRef.disabled = true;
      let timerId = null;
      timerId = setInterval(() => {
        let timeValue = convertMs(chooseDate - Date.parse(new Date()));
        daysRef.textContent = addLeadingZero(timeValue.days);
        hoursRef.textContent = addLeadingZero(timeValue.hours);
        minutesRef.textContent = addLeadingZero(timeValue.minutes);
        secondsRef.textContent = addLeadingZero(timeValue.seconds);

        if (chooseDate - Date.parse(new Date()) === 0) {
          clearInterval(timerId);
          Notify.success('Time is up');
        }
      }, 1000);
    });
  },
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const flatpickrEl = flatpickr(inputRef, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
