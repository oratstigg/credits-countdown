const $ = elem => document.querySelector(elem);

const countdown = function(_config) {
  // Set the date we're counting down to
  const countDownDate = _config.endDate;

  $(_config.target+' .day .word').innerHTML = _config.dayWord;
  $(_config.target+' .hour .word').innerHTML = _config.hourWord;
  $(_config.target+' .min .word').innerHTML = _config.minWord;
  $(_config.target+' .sec .word').innerHTML = _config.secWord; 

  const callback = _config.callback;

  const updateTime = () => {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    requestAnimationFrame(updateTime);

    if(callback) {
      const timeLeftInSeconds = distance / 1000;
      callback(timeLeftInSeconds);
    }

    const dayNumberTarget = $(_config.target+' .day .num');
    if(dayNumberTarget) {
      dayNumberTarget.innerHTML = addZero(days);
    }

    const hourNumberTarget = $(_config.target+' .hour .num');
    if(hourNumberTarget) {
      hourNumberTarget.innerHTML = addZero(hours);
    }

    const minuteNumberTarget = $(_config.target+' .min .num');
    if(minuteNumberTarget) {
      minuteNumberTarget.innerHTML = addZero(minutes);
    }

    const secoundsNumberTarget = $(_config.target+' .sec .num');
    if(secoundsNumberTarget) {
      secoundsNumberTarget.innerHTML = addZero(seconds);
    }
  }

  updateTime();
}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;