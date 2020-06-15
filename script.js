const container = document.getElementById('container');
const text = document.getElementById('text');


let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
  speech.text = 'Breathe In!';
  window.speechSynthesis.speak(speech);

  setTimeout(() => {
    text.innerText = 'Hold';
    speech.text = 'Hold';
    window.speechSynthesis.speak(speech);

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
      speech.text = 'Breathe Out!';
      window.speechSynthesis.speak(speech);
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
