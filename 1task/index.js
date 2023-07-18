const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const TIMER_STEP = 1000;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = (el) => {
  let timerInterval;
  return (seconds) => {
    if (timerInterval) clearInterval(timerInterval);
    let timerDate = new Date();
    let timerStartDate = timerDate;
    timerDate.setHours(seconds / 3600);
    timerDate.setMinutes(seconds / 60);
    timerDate.setSeconds(seconds % 60);
    timerInterval = setInterval(() => {
      timerDate = new Date(timerDate - TIMER_STEP);
      el.innerText = timerDate.toTimeString().split(' ')[0];
      if (timerStartDate - timerDate >= seconds * 1000) clearInterval(timerInterval);
    }, [TIMER_STEP]);
  };
};

const animateTimer = createTimerAnimator(timerEl);

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
  inputEl.value = "";
});
