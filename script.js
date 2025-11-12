//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const audio = new Audio(`sounds/${sound}.mp3`);

  const btn = document.querySelector(`.btn:nth-child(${sounds.indexOf(sound) + 1})`);

  btn.addEventListener('click', () => {
    stopSounds();
    audio.play();
  });
});

document.querySelector('.stop').addEventListener('click', stopSounds);

function stopSounds() {
  sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
