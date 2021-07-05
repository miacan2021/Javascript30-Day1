function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.key}"]`);
        const key = document.querySelector(`.key[data-key="${e.key}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('action');        
    };

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('action');
};

const keys = document.querySelectorAll('.key');

keys.forEach((key) =>{
key.addEventListener('click', playSound);
key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
