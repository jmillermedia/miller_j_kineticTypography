// JAVASCRIPT START
(() => {
    console.log('fired!');
    let audioClip = document.querySelector('#audioClip'),
        everything = document.querySelectorAll('*'),
        button = document.querySelector('#playAnimation');
    
    function playAudio() {
        everything.forEach(thing => thing.style.webkitAnimationPlayState = 'running');
        audioClip.play();
    }

    function resetAnimation() {
        location.reload();
    }

    button.addEventListener('click', playAudio)
    everything.forEach(thing => thing.style.webkitAnimationPlayState = "paused");
    audioClip.addEventListener('ended', resetAnimation);
})();