function playSound(e) {
  // console.log(e.keyCode)

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops function from playing

  audio.currentTime = 0; // rewind to audio to start for repeatability
  audio.play();

  // console.log(key)
  key.classList.add('playing'); // adds playing(CSS) to class
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if its not a transform
  // console.log(e.propertyName)
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // gives an ARRAY, so can't use addEventListener on it
keys.forEach((key) => {
  return key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
